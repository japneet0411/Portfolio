import Particles from "react-particles-js";
import React from "react";

const Circles = () => {
  return (
    <div className="z-10 overflow-hidden bg-transparent absolute">
      <Particles
        className="particle-wrapper"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 250,
                duration: 2,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Circles;
