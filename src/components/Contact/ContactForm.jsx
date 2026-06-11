
import { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      className="
      bg-white/5
      backdrop-blur-lg
      border
      border-white/10
      rounded-3xl
      p-8
      "
    >
      {/* Name */}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="
        w-full
        mb-5
        p-4
        rounded-xl
        bg-black/50
        border
        border-white/10
        text-white
        outline-none
        "
      />

      {/* Email */}

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="
        w-full
        mb-5
        p-4
        rounded-xl
        bg-black/50
        border
        border-white/10
        text-white
        outline-none
        "
      />

      {/* Subject */}

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="
        w-full
        mb-5
        p-4
        rounded-xl
        bg-black/50
        border
        border-white/10
        text-white
        outline-none
        "
      />

      {/* Message */}

      <textarea
        rows="6"
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="
        w-full
        mb-5
        p-4
        rounded-xl
        bg-black/50
        border
        border-white/10
        text-white
        outline-none
        "
      />

      {/* Button */}

      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        type="submit"
        className="
        w-full
        bg-red-600
        hover:bg-red-700
        py-4
        rounded-xl
        text-white
        font-bold
        transition
        "
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;