import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const leftSkills = [
    { name: "HTML5", percent: "95%" },
    { name: "CSS3", percent: "90%" },
    { name: "Bootstrap", percent: "85%" },
    { name: "Tailwind CSS", percent: "90%" },
    { name: "JavaScript", percent: "85%" },
    { name: "TypeScript", percent: "70%" },
  ];

  const rightSkills = [
    { name: "Firebase", percent: "75%" },
    { name: "React.js", percent: "90%" },
    { name: "Next.js", percent: "80%" },
    { name: "Git & GitHub", percent: "85%" },
    { name: "API Integration", percent: "80%" },
  ];

  const renderSkill = (skill, i) => (
    <div className="overflow-x-hidden" key={i}>
      <p className="text-sm uppercase font-medium">{skill.name}</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
          style={{ width: skill.percent }}
        >
          <span className="absolute -top-7 right-0 text-xs">{skill.percent}</span>
        </motion.span>
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full py-12"
    >
      {/* Heading */}
      <div className="text-center font-titleFont mb-10">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold">My Development Skills</h2>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        {/* Left Column */}
        <div className="w-full lgl:w-1/2 flex flex-col gap-6">
          {leftSkills.map(renderSkill)}
        </div>

        {/* Right Column */}
        <div className="w-full lgl:w-1/2 flex flex-col gap-6">
          {rightSkills.map(renderSkill)}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
