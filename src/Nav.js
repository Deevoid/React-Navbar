import React from "react";

import { motion, useCycle } from "framer-motion";
import Ham from "./Ham";
import Menu from "./Menu";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 80% 40px)`,
    transition: {
      type: "spring",
      stiffness: 10,
      damping: 40,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 80% 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={sidebar}>
        <Menu />
      </motion.div>
      <Ham toggle={toggleOpen} />
    </motion.nav>
  );
}
