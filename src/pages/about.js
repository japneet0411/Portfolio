import React from "react";
import Navbar from "../components/navbar";
import me from "./../images/me.jpg";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

import resume from "./../images/resume.pdf";
const About = () => {
  return (
    <div className="bg-pattern h-full md:h-screen ">
      <Navbar />

      <hr className="bg-white mt-2"></hr>
      <div className="mx-5 flex flex-col md:flex-row mt-7  text-white ">
        <div className="h-screen md:h-auto w-auto md:w-1/2 mx-auto lg:ml-10 lg:mr-1 space-y-5 ">
          <p className="rounded-xl ease-in-out duration-500 transform hover:scale-105 border-2 border-white p-3  flex-wrap text-lg ">
            <img src={me} className="float-left me mr-3 mt-3 "></img>
            BTech CSE student (2023 batch) with specialization in IOT.
            Interested in web development and competitive programming. Hard
            working and determined, open to learning new technologies, with good
            communication skills and problem-solving abilities. <br />
            Member of IEEE computer Society, IoThinc society of VIT, Vellore.
            <br />
            <br />
            <div className="ml-3">
              <a
                href={resume}
                download
                className=" hover:bg-white hover:text-black mx-auto cursor-pointer border-2 border-white mt-9 p-1 px-4"
              >
                RESUME
                <FaDownload className="inline-block ml-5 bg-transparent border-transparent" />
              </a>
              <hr className="bg-white mt-3 "></hr>
            </div>
            <p className="text-center text-xl mt-2">GET IN TOUCH </p>
            <p className="text-center mt-1 space-y-2 ">
              Phone: +91 9891464111 <br />
              Email: japneet0411@gmail.com
            </p>
            <p className="mt-5 space-x-5 mx-auto w-32 mx-auto flex flex-row ">
              <AiFillInstagram className="cursor-pointer" size={25} />
              <FaLinkedin className="cursor-pointer" size={25} />
              <FaGithub className="cursor-pointer" size={25} />
            </p>
          </p>
        </div>

        <div className="h-screen w-full md:w-auto md:h-auto flex flex-col text-center mr-auto ml-auto md:mr-1 md:ml-20 space-y-8">
          <p className="ease-in-out duration-500 transform hover:scale-110  text-lg rounded-md  border-2  p-5 m-3 border-white ">
            <h1>Vellore Institute of Technology</h1>
            <h2>Computer Science specialisation in IOT</h2>
            <h2>CGPA : 8.98</h2>
          </p>
          <p className="ease-in-out duration-500 transform hover:scale-110 text-lg rounded-md  border-2  p-5 m-3 border-white">
            <h1>Salwan Public School</h1>
            <h2>CLASS XII</h2>
            <h2>Percentage : 95% (PCM)</h2>
          </p>
          <p className="ease-in-out duration-500 transform hover:scale-110 text-lg rounded-md  border-2  p-5 m-3 border-white ">
            <h1>Salwan Public School</h1>
            <h2>CLASS X</h2>
            <h2>CGPA : 10</h2>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
