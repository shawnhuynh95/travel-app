import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

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

export default Links;
