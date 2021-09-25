import React from "react";
import { Link } from "gatsby";

const navbar = () => {
  return (
    <div className="mx-auto nav text-md w-full flex flex-row justify-around text-white  p-3 ">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Skills</Link>
    </div>
  );
};

export default navbar;
