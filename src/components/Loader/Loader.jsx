import { motion } from "framer-motion";

function Loader() {
  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      bg-black
      flex
      items-center
      justify-center
      "
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        w-20
        h-20
        border-4
        border-red-500
        border-t-transparent
        rounded-full
        "
      />
    </div>
  );
}

export default Loader;