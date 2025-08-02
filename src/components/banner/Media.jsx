import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61576288364415"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-ahsan-b204b8357"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <FaJsSquare />
          </span>
          <span className="bannerIcon">
            <FaCss3Alt />
          </span>

        </div>
      </div>
    </div>
  )
}

export default Media