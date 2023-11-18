"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Links from "./Links";
import ToggleButton from "./ToggleButton";


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
