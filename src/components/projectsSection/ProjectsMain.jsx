import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "solar hardware project",
    year: "Mar2024",
    align: "right",
    image: "/images/solar.png",
    link: "#",
  },
  {
    name: "DreamEvent – Elegant Event Planning Website",
    year: "May 2024",
    align: "left",
    image: "/images/event.png",
    link: "#",
  },
  {
    name: "restaurant website",
    year: "Jun 2024",
    align: "right",
    image: "/images/rest.png",
    link: "#",
  },
  {
    name: "bus pass management system",
    year: "Feb 2024",
    align: "left",
    image: "/images/bus.png",
    link: "#",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
