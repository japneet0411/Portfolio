import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./../images/animation.json";
import Navbar from "../components/navbar";
import * as girl from "./../images/girl2.json";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const defaultOptions = {
    hover: false,
    loop: true,
    autoplay: true,
    mode: "bounce",
    speed: "1.5",
    onclick: false,
    controls: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsimg = {
    hover: false,
    loop: true,
    autoplay: true,
    speed: "1.5",
    onclick: false,
    controls: false,
    animationData: girl,
    background: "transparent",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="overflow-hidden bg-black text-color-white w-full h-screen opacity-95">
      <Helmet>
        <title>title</title>
        <meta name="description" content="Helmet app" />
      </Helmet>
      <div className="z-20 animation absolute h-full ">
        <Lottie
          options={defaultOptions}
          height={"100vh"}
          width={"100%"}
          isClickToPauseDisabled={true}
          hover={false}
          style={{ cursor: "context-menu" }}
        />
      </div>
      <Navbar />
      <div className="z-20 inline-block mt-20 ml-5 lg:ml-32 absolute cursor-default ">
        <h1 className="text-white  text-5xl md:text-8xl font pb-5 transform hover:scale-105">
          Japneet Kaur
        </h1>
        <br />
        <h3 className=" text-white text-2xl md:text-5xl ml-6  ">
          Full Stack Web Developer
        </h3>
      </div>
      <a
        href="/about"
        className="text-xl z-20 absolute p-5 left-8 lg:left-44 top-36 mt-56 hover:bg-gray-500 rounded-lg  border-2 border-white text-white"
      >
        Click to know more
      </a>
      <div className="float-right -mr-5 md:mr-2 opacity-50 lg:opacity-90">
        <Lottie
          options={defaultOptionsimg}
          height={"550px"}
          width={"400px"}
          isClickToPauseDisabled={true}
          hover={false}
          className="animation"
          style={{
            cursor: "context-menu",
            margin: "-10px",
            position: "relative",
            float: "left",
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
