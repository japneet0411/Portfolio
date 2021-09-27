import React from "react";
import { Link } from "gatsby";

const navbar = () => {
  return (
    <div className="mx-auto nav text-md w-full flex flex-row justify-around text-white  p-3 ">
      <Link to="/" activeStyle={{ color: "#F1CA89", opacity: "0.8" }}>
        Home
      </Link>
      <Link to="/about" activeStyle={{ color: "#F1CA89", opacity: "0.8" }}>
        About
      </Link>
      <Link to="/projects" activeStyle={{ color: "#F1CA89", opacity: "0.8" }}>
        Projects
      </Link>
      <Link to="/skills" activeStyle={{ color: "#F1CA89", opacity: "0.8" }}>
        Skills
      </Link>
    </div>
  );
};

export default navbar;
