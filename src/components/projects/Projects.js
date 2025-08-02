import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
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
  githubLink="https://github.com/yourusername/ecommerce"  // Optional, GitHub link if any
  liveLink="https://sensational-begonia-04abb3.netlify.app"
/>

<ProjectsCard
  title="Login/Signup with Backend"
  des="Auth system using React, Node.js, Express, MongoDB."
  src={projectTwo}
  githubLink="https://github.com/yourusername/login-signup"
  liveLink="https://iridescent-peony-bd857f.netlify.app"
/>

<ProjectsCard
  title="Todo App with Backend"
  des="MERN stack Todo app with user login and CRUD functionality."
  src={projectThree}
  githubLink="https://github.com/yourusername/todo-backend"
  liveLink="https://velvety-chimera-396509.netlify.app"
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

      </div>
    </section>
  );
};

export default Projects;
