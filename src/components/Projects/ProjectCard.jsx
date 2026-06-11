import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
title,
image,
description,
technologies,
github,
demo,
}) {
return (
<motion.div
whileHover={{ y: -10 }}
className="
bg-white/5
backdrop-blur-lg
border border-white/10
rounded-3xl
overflow-hidden
group
"
>
{/* Image */} <div className="overflow-hidden"> <img
       src={image}
       alt={title}
       className="
       w-full
       h-64
       object-cover
       transition-all
       duration-500
       group-hover:scale-110
       "
     /> </div>

```
  {/* Content */}
  <div className="p-6">
    <h3
      className="
      text-2xl
      font-bold
      text-white
      "
    >
      {title}
    </h3>

    <p
      className="
      text-gray-400
      mt-3
      "
    >
      {description}
    </p>

    {/* Technologies */}
    <div
      className="
      flex
      flex-wrap
      gap-2
      mt-5
      "
    >
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
          px-3
          py-1
          bg-red-500/20
          text-red-400
          rounded-full
          text-sm
          "
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Buttons */}
    <div
      className="
      flex
      gap-4
      mt-6
      "
    >
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="
        flex
        items-center
        gap-2
        px-5
        py-3
        bg-white/10
        rounded-xl
        hover:bg-white/20
        transition
        "
      >
        <FaGithub />
        GitHub
      </a>

      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="
        flex
        items-center
        gap-2
        px-5
        py-3
        bg-red-600
        rounded-xl
        hover:bg-red-700
        transition
        "
      >
        <FaExternalLinkAlt />
        Live Demo
      </a>
    </div>
  </div>
</motion.div>


);
}

export default ProjectCard;
