import React from "react";
import Title from "../layouts/Title";
import {
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectEight,
  projectNine,
  projectOne,
  projectTen,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-Commerce Website"
          des="A full-stack ecommerce app with user auth, cart, and Stripe integration."
          src={projectOne}
          githubLink="https://github.com/MuhammadAhsan123456/E_Commerce_Official"  // Optional, GitHub link if any
          liveLink="https://muhammadahsan123456.github.io/E_Commerce_Official/"
        />

        <ProjectsCard
          title="Smart Digital Watch"
          des="A React-based smart digital watch featuring real-time time, date, and day display, alarm functionality, 12/24-hour format toggle, and light/dark mode."
          src={projectTwo}
          githubLink="https://github.com/MuhammadAhsan123456/REACT_WATCH"
          liveLink="https://react-watch-coral.vercel.app/"
        />


        <ProjectsCard
          title="Tic Tac Toe Game"
          des="A Tic Tac Toe game built with React.js featuring interactive gameplay, win and draw detection, smooth UI, and responsive design."
          src={projectThree}
          githubLink="https://github.com/MuhammadAhsan123456/REACT-JS_TIC_TAC_TOE"
          liveLink="https://react-js-tic-tac-toe-six.vercel.app/"
        />


        <ProjectsCard
          title="Weather App"
          des="Weather forecast app using OpenWeather API and React."
          src={projectFour}
          githubLink="https://github.com/MuhammadAhsan123456/Weather-APP"
          liveLink="https://muhammadahsan123456.github.io/Weather-APP/"
        />

        <ProjectsCard
          title="Calculator"
          des="Responsive calculator app made using HTML, CSS, JavaScript."
          src={projectFive}
          githubLink="https://github.com/MuhammadAhsan123456/calculator-01"
          liveLink="https://muhammadahsan123456.github.io/calculator-01/"
        />

        <ProjectsCard
          title="Digital Clock"
          des="Simple live digital clock built using vanilla JavaScript."
          src={projectSix}
          githubLink="https://github.com/MuhammadAhsan123456/Digital-clock-02"
          liveLink="https://muhammadahsan123456.github.io/Digital-clock-02/"
        />

        <ProjectsCard
          title="React Quiz App"
          des="A dynamic Quiz App built with React.js featuring interactive multiple-choice questions, score tracking, and smooth navigation."
          src={projectEight}
          githubLink="https://github.com/MuhammadAhsan123456/QUIZ_APP_REACT_JS  "
          liveLink="https://quiz-app-react-js-nine.vercel.app/"
        />

        <ProjectsCard
          title="Number Guessing Game"
          des="A Number Guessing Game built with HTML, CSS, and JavaScript where players guess a random number and receive instant feedback."
          src={projectNine}
          githubLink="https://github.com/MuhammadAhsan123456/NUM-GUESS_GAME"
          liveLink="https://muhammadahsan123456.github.io/NUM-GUESS_GAME/"
        />

        <ProjectsCard
          title="Next.js ToDo List App"
          des="A task management app built with Next.js featuring Add/Delete functionality and a responsive UI to help users stay organized."
          src={projectTen}
          githubLink="https://github.com/MuhammadAhsan123456/TodoList_Nextjs"
          liveLink="https://todo-list-nextjs-phi.vercel.app/"
        />


      </div>
    </section>
  );
};

export default Projects;
