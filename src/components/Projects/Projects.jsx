import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white"
        >
          Featured Projects
        </motion.h2>

        <p className="text-gray-400 mt-6 max-w-2xl">
          A collection of modern web and mobile applications built using
          cutting-edge technologies.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;