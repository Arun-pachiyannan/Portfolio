import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function MobileMenu({ open, setOpen }) {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="
            fixed
            inset-0
            bg-black/50
            backdrop-blur-sm
            z-40
            "
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="
            fixed
            top-0
            right-0
            w-[280px]
            h-screen
            bg-black
            border-l
            border-red-500/20
            z-50
            p-6
            "
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <ul className="mt-16 flex flex-col gap-8">
              {navLinks.map((item) => (
                <li
                  key={item}
                  className="
                  text-white
                  text-xl
                  hover:text-red-500
                  transition
                  cursor-pointer
                  "
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className="
              mt-10
              w-full
              bg-red-600
              py-3
              rounded-full
              text-white
              font-semibold
              hover:bg-red-700
              transition
              "
            >
              Hire Me
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;