import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <div
      className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      "
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
        w-8
        h-14
        border-2
        border-red-500
        rounded-full
        flex
        justify-center
        "
      >
        <div
          className="
          w-2
          h-2
          bg-red-500
          rounded-full
          mt-2
          "
        />
      </motion.div>
    </div>
  );
}

export default ScrollIndicator;