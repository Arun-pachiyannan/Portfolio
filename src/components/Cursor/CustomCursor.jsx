import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        damping: 20,
      }}
      className="
      fixed
      w-5
      h-5
      bg-red-500
      rounded-full
      pointer-events-none
      z-[9999]
      hidden lg:block
      "
    />
  );
}

export default CustomCursor;