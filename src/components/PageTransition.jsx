import { motion } from "framer-motion";

export default function PageTransition({ children }) {
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
      {children}
    </motion.div>
  );
}
