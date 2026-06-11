import { motion } from "framer-motion";

import {
  FaSearch,
  FaPalette,
  FaCode,
  FaRocket,
} from "react-icons/fa";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <FaSearch />,
    title: "Discover",
    description:
      "Understanding business goals, target audience, and project requirements.",
  },

  {
    icon: <FaPalette />,
    title: "Design",
    description:
      "Creating modern UI/UX experiences with premium aesthetics.",
  },

  {
    icon: <FaCode />,
    title: "Develop",
    description:
      "Building scalable web and mobile applications using modern technologies.",
  },

  {
    icon: <FaRocket />,
    title: "Deploy",
    description:
      "Testing, optimization, deployment, and continuous improvements.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="
      py-32
      bg-white
      px-6
      "
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          text-5xl
          md:text-7xl
          font-black
          text-black
          "
        >
          My Process
        </motion.h2>

        <p
          className="
          text-gray-600
          mt-6
          max-w-2xl
          "
        >
          A proven workflow that transforms
          ideas into high-performance digital
          products.
        </p>

        <div
          className="
          mt-20
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={
                service.description
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;