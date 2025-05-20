import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    skill: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "#38B2AC",
  },
  {
    skill: "Node.js",
    icon: SiNodedotjs,
    color: "#43853D",
  },
  {
    skill: "Express.js",
    icon: SiExpress,
    color: "#000000",
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 my-12">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.1 * index)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl" style={{ color: item.color }} />
          <p className="text-center mt-4 text-lg font-medium">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
