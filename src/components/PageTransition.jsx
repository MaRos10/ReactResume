import { motion } from "framer-motion";

// Defines page transition animation using Framer Motion
export default function PageTransition({ children }) {
  const opacityAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="page"
      transition={{
        ease: "easeInOut",
        duration: 0.8,
      }}
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
