import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intermediate in Computer Science"
            subTitle="Pakistan Shipowner Colleges (2024 - 2025)"
            result="3.8/4"
            des="Studied fundamental subjects of computer science including programming, web development, and basic networking."
          />
          <ResumeCard
            title="Matriculation - Science"
            subTitle="Kamran Grammer School (2022 - 2023)"
            result="A+1 Grade"
            des="Completed matriculation with science subjects including Physics, Chemistry, and Computer Science."
          />
        </div>
      </div>

      {/* Experience Section (optional, simplified) */}
      <div>
  <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
    <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
    <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
  </div>
  <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

    {/* Student at SMIT */}
    <ResumeCard
      title="Web & Mobile App Development - Student"
      subTitle="Saylani Mass IT Training (SMIT) - (2024 - Present)"
      result="Karachi"
      des="Currently enrolled in SMIT's development program. Learning full-stack development including HTML, CSS, JavaScript, React, and backend fundamentals."
    />

      {/* Junior Front-End Developer */}
    <ResumeCard
      title="Junior Front-End Developer"
      subTitle="Personal Projects & Practice (2024 - Present)"
      result="Remote"
      des="Working on real-world projects using React.js, Tailwind CSS, and JavaScript. Focused on building responsive UIs, API integrations, and reusable components."
    />

  </div>
</div>

    </motion.div>
  );
};

export default Education;
