import React from "react";

function Navbar() {
  return (
    <div className="w-full  py-3 px-4 border-b-2 bg-[#FBEAEB] fixed z-20">
      <div className="flex justify-center  md:justify-between">
        <p className="text-xl font-bold myPortfolio">My Portfolio</p>
        <ul className="flex gap-6 text-xl navlink">
          <li className="hover:text-blue-700">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-700">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-700">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-blue-700">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-700">
            <a href="#tools">Tools</a>
          </li>
        </ul>
        <a
          href="https://www.canva.com/design/DAF9PpxnxHs/0di57MS7juVKRSbD8MWLzw/view?utm_content=DAF9PpxnxHs&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank"
          className="bg-[#2F3C7E] text-white w-32 p-1 rounded-md myPortfolio text-center"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Navbar;
