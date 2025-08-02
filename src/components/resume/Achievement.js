import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 flex-col lgl:flex-row"
    >
      {/* Learning Achievements */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-4xl font-bold">My Achievements</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Completed Web & App Development Course"
            subTitle="SMIT - Saylani Mass IT Training (2024 - Present)"
            result="Ongoing"
            des="Currently completing a full-stack development program with focus on HTML, CSS, JavaScript, React.js, Next.js, and Firebase."
          />
          <ResumeCard
            title="Built My Portfolio Website"
            subTitle="Personal Project"
            result="Live"
            des="Created a professional and responsive portfolio website using React, Tailwind CSS, and Framer Motion animations."
          />
          <ResumeCard
            title="Git & GitHub Mastery"
            subTitle="Self Learning"
            result="Completed"
            des="Learned Git basics, GitHub repository management, commits, pull requests, and collaborative workflows."
          />
        </div>
      </div>

      {/* Extra Practice Milestones */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Practice Work</p>
          <h2 className="text-4xl font-bold">Milestones</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Integrated External APIs"
            subTitle="Practice Projects (2024)"
            result="Success"
            des="Used public APIs like weather, news, and product data with fetch/Axios in React apps."
          />
          <ResumeCard
            title="UI/UX Components Practice"
            subTitle="Tailwind CSS + React"
            result="100+ hrs"
            des="Built dozens of reusable components like modals, navbars, forms, and cards to improve UI design sense."
          />
          <ResumeCard
            title="Daily Coding & Improvement"
            subTitle="Self Discipline"
            result="✅"
            des="Consistently learning from documentation, YouTube tutorials, and building projects to strengthen skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
