import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
      bg-black
      border-t
      border-white/10
      py-10
      px-6
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-6
        "
      >
        {/* Logo */}

        <div>
          <h2
            className="
            text-3xl
            font-black
            text-red-500
            "
          >
            ARUN
          </h2>

          <p className="text-gray-400 mt-2">
            Full Stack Developer
          </p>
        </div>

        {/* Social Links */}

        <div className="flex gap-6">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
            text-white
            text-2xl
            hover:text-red-500
            transition
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="
            text-white
            text-2xl
            hover:text-red-500
            transition
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="
            text-white
            text-2xl
            hover:text-red-500
            transition
            "
          >
            <FaInstagram />
          </a>

        </div>

        {/* Back To Top */}

        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={scrollToTop}
          className="
          bg-red-600
          p-4
          rounded-full
          text-white
          "
        >
          <FaArrowUp />
        </motion.button>

      </div>

      {/* Bottom */}

      <div
        className="
        text-center
        text-gray-500
        mt-8
        "
      >
        © {new Date().getFullYear()} Arun.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;