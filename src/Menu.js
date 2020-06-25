import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const ulVar = {
  open: {
    display: "block",
    transition: { staggerChildren: 0, delayChildren: 0.1 },
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuItem = ({ i }) => {
  return (
    <motion.ul variants={ulVar}>
      <motion.li variants={variants}>Item 1</motion.li>
      <motion.li variants={variants}>Item 2</motion.li>
      <motion.li variants={variants}>Item 3</motion.li>
      <motion.li variants={variants}>Item 4</motion.li>
      <motion.li variants={variants}>No item here</motion.li>
    </motion.ul>
  );
};
export default MenuItem;
