import React from "react";
import Navbar from "../components/navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaLaptop, FaSpotify } from "react-icons/fa";
import { FcBusinesswoman } from "react-icons/fc";
const Projects = () => {
  return (
    <div className="bg-pattern h-full ">
      <Navbar />
      <hr className="bg-white mt-2"></hr>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161616", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #161616 " }}
          iconStyle={{ background: "#ED50F1", color: "#fff" }}
          icon={<FaLaptop />}
        >
          <h1 className="underline vertical-timeline-element-title">
            ARCS Website (ongoing)
          </h1>

          <p className="">
            A website created using REACT and GATSBY. Currently working on the
            frontend development of landing page and other sections of the
            website.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#231E23", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #231E23 " }}
          iconStyle={{ background: "#B5DEFF", color: "#fff" }}
          icon={<FcBusinesswoman />}
        >
          <h1 className="vertical-timeline-element-title underline">
            Portfolio
          </h1>
          <p className="pb-5">
            My Portfolio website 👩‍💻. A static website built using REACT and
            GATSBY
          </p>

          <a
            className="text-md rounded-lg border-2 p-2  hover:bg-white hover:text-black mr-3"
            href="https://github.com/japneet0411/Portfolio"
          >
            Github Link
          </a>
          <a
            className="text-md rounded-lg border-2 p-2  hover:bg-white hover:text-black"
            href="#"
          >
            Website Link
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161616", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #161616 " }}
          iconStyle={{ background: "#80ED99", color: "#000000" }}
          icon={<FaSpotify />}
        >
          <h1 className="vertical-timeline-element-title underline">
            Spotify Carousel
          </h1>
          <p className="pb-5">
            Project created using REACT, BOOTSTRAP, NODEJS, Express. Web
            application that lets the user play random songs from pre-created
            playlists, save them to your Spotify account and also get
            recommendations based on the songs played. I majorly worked as a
            frontend developer in this project.
          </p>

          <a
            href="https://github.com/japneet0411/Spotify-Carousel"
            className="text-md rounded-lg border-2 p-2 hover:bg-white hover:text-black"
          >
            Github Link
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#231E23", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #231E23 " }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h1 className="underline vertical-timeline-element-title">
            Chapter Website
          </h1>
          <p className="pb-5">
            IEEE-CS, student organization of VIT Vellore The website highlights
            about the chapter ,built using react and Gatsby. I played a vital
            role in the Frontend development of the Landing Page.
          </p>
          <a
            href="https://www.ieeecsvit.com/"
            className="text-md rounded-lg border-2 p-2  hover:bg-white hover:text-black"
          >
            Website Link
          </a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
