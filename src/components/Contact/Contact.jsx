import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-black px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-400 mt-6 max-w-2xl">
          Have a project in mind?
          Let's work together and create
          something amazing.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left Side */}

          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Let's Talk
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaEnvelope
                  className="text-red-500"
                  size={25}
                />
                <span className="text-gray-300">
                  arun@example.com
                </span>
              </div>

              <div className="flex gap-6 mt-10">

                <a href="#" className="text-3xl text-white hover:text-red-500 transition">
                  <FaGithub />
                </a>

                <a href="#" className="text-3xl text-white hover:text-red-500 transition">
                  <FaLinkedin />
                </a>

                <a href="#" className="text-3xl text-white hover:text-red-500 transition">
                  <FaInstagram />
                </a>

              </div>
            </div>
          </div>

          {/* Right Side */}

          <ContactForm />

        </div>
      </div>
    </section>
  );
}

export default Contact;