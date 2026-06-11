import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-3xl font-black text-red-500">
            ARUN
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white">
            {navLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-red-500 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Hire Me Button */}
          <button
            className="
            hidden md:block
            bg-red-600
            hover:bg-red-700
            px-6 py-3
            rounded-full
            font-medium
            transition-all duration-300
            "
          >
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <FaBars size={24} />
          </button>

        </div>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;