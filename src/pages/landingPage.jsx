import React from "react";
import me from "./../images/myImg.png";
import Lottie from "react-lottie";
import * as animationData from "./../images/animation.json";
import Navbar from "../components/navbar";
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

  return (
    <div className="overflow-hidden bg-black text-color-white w-full h-screen opacity-90">
      <div className="animation absolute h-full ">
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
        <h1 className="text-white  text-4xl md:text-7xl font pb-5 transform hover:scale-105">
          Japneet Kaur
        </h1>
        <br />
        <h3 className=" text-white text-xl md:text-4xl ml-6  ">
          Full Stack Web Developer
        </h3>
      </div>
      <button
        type="button"
        className="z-20 absolute p-5 left-8 lg:left-44 top-36 mt-56 hover:bg-gray-500 rounded-lg  border-2 border-white text-white"
      >
        Click to know more
      </button>
      <div className="bg-black  border-4 border-opacity-60 lg:border-opacity-100 lg:border-white imgDiv float-right inline-block -mt-10 -mr-1 ">
        <img
          src={me}
          className="relative me   h-auto opacity-70 ml-auto mt-2 "
        ></img>
      </div>
    </div>
  );
};

export default LandingPage;
