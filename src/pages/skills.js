import React from "react";
import Navbar from "../components/navbar";

import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-pattern h-full md:h-screen overflow-hidden">
      <Navbar />
      <hr className="bg-white mt-2"></hr>
      <div className="md:mt-20 grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1  p-10 gap-6">
        <div className="text-white text-center border-2 border-white rounded-2xl p-6 hover:bg-lightBlack">
          <ul className="list-inside list-disc space-y-4 mont inline-block">
            <p className="text-3xl underline">Skills </p>

            <li>FrontEnd development</li>
            <li>Competitive programming</li>
            <li>BackEnd development</li>
          </ul>
        </div>
        <div className="text-white text-center border-2 border-white rounded-2xl p-6 hover:bg-lightBlack">
          <p className="text-3xl underline mb-5">Certifications/Experience </p>
          <ul className="space-y-4 list-inside list-disc inline-block">
            <li>Samsung Prism Internship(ongoing)</li>
            <li>AWS Cloud Practicioner</li>
          </ul>
        </div>

        <div className="hover:bg-lightBlack text-white  mont border-2 border-white rounded-2xl p-6">
          <p className="text-3xl text-center mb-5 underline ">Languages </p>
          <p className="flex flex-wrap space-x-6 ">
            <FaReact size={40} className="mb-10" />
            <FaPython size={40} className="mb-10" />
            <SiCplusplus size={40} className="mb-10" />
            <FaJava size={40} className="mb-10" />
            <SiJavascript size={40} className="mb-10" />
            <FaHtml5 size={40} className="mb-10" />
            <FaCss3 size={40} className="mb-10" />
            <FaNode size={40} className="mb-10" />
            <FaBootstrap size={40} className="mb-10" />
            <SiTailwindcss size={40} className="mb-10" />
          </p>
        </div>
      </div>
      <div className="mont text-lg bg-white  h-10 w-full text-center md:absolute bottom-0  flex justify-center pt-1">
        Made with ❤ by Japneet
      </div>
    </div>
  );
};

export default Skills;
