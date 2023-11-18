"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      className="z-999 fixed w-[50px] h-[50px] top-[25px] right-[25px] bg-transparent cursor-pointer border-none"
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

const Links = () => {
  const linksVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },

    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },

    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="flexCenter flex-col absolute h-full w-full gap-[20px]"
      variants={linksVariants}
    >
      {NAV_LINKS.map((item) => (
        <motion.a
          href={item.href}
          key={item.key}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bold-24"
        >
          {item.label}
        </motion.a>
      ))}
      <motion.div variants={itemVariants}>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </motion.div>
    </motion.div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      className="lg:hidden flexCenter flex-col text-black"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="z-999 fixed top-0 right-0 bottom-0 w-[300px] bg-white"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.section>
  );
};

const variants = {
  open: {
    clipPath: "circle(1200px at 235px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 235px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default Sidebar;
