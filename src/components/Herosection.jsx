import React from "react";
import "../style/herosection.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import img from "../assets/main2.jpeg";
function Herosection() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="w-full flex h-auto flex-col items-center bg-[#FBEAEB] pb-20 md:flex-row lg:min-h-[120vh] pt-12">
        {/* herosection image -- */}

        <div className=" herosectionImg w-[300px] h-[300px] p-4  bg-white overflow-hidden md:w-[30vw] md:p-0 md:h-[100vh]">
          <img className="h-full w-full object-cover " src={img} alt="" />
        </div>
        <div className=" w-full flex flex-col md:mt-36 md:ml-20">
          <div className="relative w-full h-auto p-7  flex items-start flex-col justify-end mt-2 ">
            <div className="absolute w-[500px] h-[500px] rounded-full border-gray-300 bottom-0 -left-8 border-2 border-dashed circleDashed -z-[0]"></div>

            <div className="absolute w-52 h-52 rounded-full border-gray-300 border-none top-[60%] left-[30%] lg:border-2 lg:border-dashed circleDashed"></div>

            <div className="mx-auto w-full h-auto  flex flex-col justify-center z-10  ">
              <h4 className="text-2xl font-bold opacity-60">Hello</h4>
              {/* i am anuj sharma---- */}
              <div className="flex flex-wrap  gap-3 text-4xl font-bold md:text-6xl ">
                <div className=" ">I am</div>
                <div>
                  <h1 className="relative whitespace-nowrap overflow-hidden t-[#2F3C7E] typing  ">
                    {" "}
                    Anuj Sharma
                  </h1>
                </div>
              </div>
              <p className="text-xl opacity-90 font-bold md:xl">
                FrontEnd Developer
              </p>
              <p className=" w-[80%] font-semibold text-[16px] mt-4">
                Welcome to my corner of the web! I'm Anuj, a frontend developer
                who transforms ideas into interactive and seamless digital
                solutions.
              </p>
              <a className="mt-4 bg-[#2F3C7E] text-white w-24  p-1 rounded-md text-center hover:bg-blue-700" href="https://www.canva.com/design/DAF9PpxnxHs/0di57MS7juVKRSbD8MWLzw/view?utm_content=DAF9PpxnxHs&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">Resume</a>
              {/* resume download buton --- */}
            </div>
            {/* swiup button --- */}
            <div className="w-60  m-auto text-6xl  to-blue-600 opacity-80 h-24 top-10 flex relative justify-start">
              <span className="swipup  lg:hidden">
                {" "}
                <a href="#about">
                  {" "}
                  <MdOutlineKeyboardDoubleArrowDown />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
