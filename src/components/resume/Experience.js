import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 flex-col lgl:flex-row"
    >
      {/* Development Experience Section */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-4xl font-bold">Development Journey</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Junior Front-End Developer"
            subTitle="Freelance & Practice Projects (2024 - Present)"
            result="Remote"
            des="Built several personal and practice projects using HTML, CSS, JavaScript, React.js, and Next.js. Focused on responsive UI design and API integration."
          />
          <ResumeCard
            title="Student of Web & App Development"
            subTitle="SMIT - Saylani Mass IT Training (2024 - Present)"
            result="Karachi"
            des="Currently enrolled in SMIT’s Web & App Development program. Learning React, Next.js, Firebase, Git, and building strong development foundations."
          />
        </div>
      </div>

      {/* Optional: You can remove this if you don't have trainer experience */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Self Learning</p>
          <h2 className="text-4xl font-bold">Learning Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="YouTube / Documentation / Projects"
            subTitle="Self-Taught Path (2023 - Present)"
            result="Online"
            des="Practicing through online resources, tutorials, and official documentation. Focused on learning by building real-world inspired front-end applications."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
