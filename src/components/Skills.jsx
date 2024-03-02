import React, { useEffect } from "react";
import "../style/skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full h-screenpy-8 overflow-hidden mb-5 pt-5" id="skills">
      <div className="w-[90%] m-auto bg-[#FBEAEB] h-full flex flex-col items-center py-5 pb-12  ">
        <h1 className="text-3xl font-bold w-full text-center">
          My<span className="text-[#2F3C7E]"> Skills</span>
        </h1>
        <div className="w-full px-6 grid gap-10 md:grid-cols-2  mt-10">
          <div className="w-full  flex flex-col gap-10" data-aos="slide-right">
            {/* ---------------------- */}
            <div className=" w-[90%] ">
              <div className="flex justify-between font-bold opacity-80">
                <h4 className="">Html</h4>
              </div>
              <span className=" inline-block w-full h-2 rounded-md bg-blue-300 skillloader nintyPer relative"></span>
            </div>
            <div className=" w-[90%] ">
              <div className="flex justify-between font-bold opacity-80">
                <h4 className="">Css</h4>
              </div>
              <span className=" inline-block w-full h-2 rounded-md bg-blue-300 skillloader eightyPer relative"></span>
            </div>
            <div className=" w-[90%] ">
              <div className="flex justify-between font-bold opacity-80">
                <h4 className="">Tailwind</h4>
              </div>
              <span className=" inline-block w-full h-2 rounded-md bg-blue-300 skillloader 70% sixtyPer relative"></span>
            </div>
            {/* ------------------------ */}
          </div>
          <div
            className="w-full flex md:justify-end flex-col gap-10"
            data-aos="slide-left"
          >
            <div className="w-[90%]">
              <div className="flex justify-between font-bold opacity-80">
                <h4>Javascript</h4>
              </div>
              <span className=" inline-block w-full h-2 rounded-md bg-blue-300 skillloader relative eightyPer"></span>
            </div>{" "}
            <div className="w-[90%]">
              <div className="flex justify-between font-bold opacity-80">
                <h4>Figma</h4>
              </div>
              <span className=" inline-block w-full h-2 rounded-md bg-blue-300 skillloader fiftyPer relative"></span>
            </div>{" "}
            <div className="w-[90%]">
              <div className="flex justify-between font-bold opacity-80">
                <h4>React</h4>
              </div>
              <span className=" inline-block w-full h-2 rounded-md bg-blue-300 skillloader eightyPer relative"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
