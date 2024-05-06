import React from "react";
import { FetchData } from "../../components/FetchData";
import "./MyProjects.css";

import { motion } from "framer-motion";

export default function MyProjects({ title }) {
  return (
    <motion.div
      className="page"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <h1>{title}</h1>
      <FetchData />
    </motion.div>
  );
}
