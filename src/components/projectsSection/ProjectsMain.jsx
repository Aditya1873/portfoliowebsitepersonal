import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "solar hardware project",
    year: "Mar2024",
    align: "right",
    image: "../../public/images/solar.png",
    link: "#",
  },
  {
    name: "DreamEvent – Elegant Event Planning Website",
    year: "may 2024",
    align: "left",
    image: "../../public/images/event.png",
    link: "#",
  },
  {
    name: "restuarant website",
    year: "jun 2024",
    align: "right",
    image: "../../public/images/rest.png",
    link: "#",
  },
  {
    name: "bus pass management system",
    year: "feb 2024",
    align: "left",
    image: "../../public/images/bus.png",
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
