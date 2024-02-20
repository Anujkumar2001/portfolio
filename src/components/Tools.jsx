import React, { useEffect } from "react";
import "../style/tools.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Tools() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="w-full  px-20 flex flex-col items-start lg:items-center mb-5  bg-[#FBEAEB] pt-10 overflow-hidden pb-20"
      id="tools"
    >
      <h1 className="text-3xl font-bold text-center w-full">Tools</h1>
      <div className="h-[520px] skillLine w-1 mt-10  rounded-md border-[#2F3C7E] border-l-2 bg-[#2F3C7E] relative ">
        {/* ---------------- */}
        <div
          className=" tool w-[500px] leftItem absolute flex  items-center gap-1 right-0 "
          data-aos="slide-right"
        >
          <div className="bg-[#2F3C7E]  w-full p-4 rounded-md text-[#FBEAEB]lg:order-1 text-white order-2">
            <h3 className="text-2xl font-bold">Visual Code Editor</h3>
            <p className="mt-2 text-justify tracking-tighter">
              I use the VS Code editor to write and manage my code, benefiting
              from its extensive features that make coding and project
              development more efficient for me.
            </p>
          </div>
          <div className="w-8 p-1 h-8 rounded-full bg-white overflow-hidden flex items-center border-black border-[2px] order-1 lg:order-2">
            <img
              className="w-full h-full object-cover  "
              src="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg"
              alt=""
            />
          </div>
        </div>{" "}
        {/* ----------------------- */}
        <div
          className="tool w-[500px] rightItem absolute flex items-center gap-1 "
          data-aos="slide-left"
        >
          <div className="w-8 p-1 h-8 rounded-full bg-white overflow-hidden flex items-center border-black border-[2px]">
            <img
              className="w-full h-full object-cover  "
              src="https://static.vecteezy.com/system/resources/previews/016/833/872/original/github-logo-git-hub-icon-on-white-background-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="bg-[#2F3C7E]  w-full p-4 rounded-md text-[#FBEAEB]">
            <h3 className="text-2xl font-bold">GitHub</h3>
            <p className="mt-2 text-justify tracking-tighter">
              I use GitHub to upload and store my code, making it easily
              accessible for collaboration and modifications by anyone.
            </p>
          </div>
        </div>{" "}
        {/* ----------------- */}
        <div
          className="tool w-[500px] rightItem2 absolute flex items-center gap-1"
          data-aos="slide-right"
        >
          <div className="bg-[#2F3C7E]  w-full p-4 rounded-md text-[#FBEAEB] order-2 lg:order-1">
            <h3 className="text-2xl font-bold">Figma</h3>
            <p className="mt-2 text-justify tracking-tighter">
              I use Figma to create layouts before building websites and to
              generate blueprints for websites.
            </p>
          </div>
          <div className="w-8 p-1 h-8 rounded-full bg-white overflow-hidden flex items-center border-black border-[2px] order-1 lg:order-2">
            <img
              className="w-full h-full object-cover  "
              src="https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png"
              alt=""
            />
          </div>
        </div>{" "}
        <div
          className="tool w-[500px] rightItem3 absolute flex items-center gap-1 "
          data-aos="slide-left"
        >
          <div className="w-8 p-1 h-8 rounded-full bg-white overflow-hidden flex items-center border-black border-[2px]">
            <img
              className="w-full h-full object-cover  "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJSF7G11nBkWhjtmz28uz8YVlCEf0709A39nJHOWSCqQzoRPBeJfHnvyh-hzNIXHnmw0&usqp=CAU"
              alt=""
            />
          </div>
          <div className="bg-[#2F3C7E]  w-full p-4 rounded-md text-[#FBEAEB]">
            <h3 className="text-2xl font-bold">Postman</h3>
            <p className="mt-2 text-justify tracking-tighter">
              I use Postman because it streamlines API testing, simplifies
              request handling and response inspection, ensuring efficient
              development, and reliable application performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
