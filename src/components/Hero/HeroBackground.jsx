import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-20
        right-10
        w-48
        h-48
        bg-red-500/20
        blur-[60px]
        rounded-full
        "
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        left-10
        w-48
        h-48
        bg-red-600/10
        blur-[60px]
        rounded-full
        "
      />
    </>
  );
}

export default HeroBackground;