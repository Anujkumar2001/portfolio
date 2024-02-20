import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/about.css";
function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="about"
      className="w-full min-h-60 mb-5 py-10 lg:px-20
 bg-[#3b4a92]" 
    >
      <div className=" text-[#FBEAEB] px-10" >
        <h1 className="text-5xl font-bold ">About Me</h1>
        <p className="mt-4 tracking-wider text-justify">
          Hi, I'm Anuj Sharma, a self-taught frontend developer based in Bihar. Recently graduated, I have a solid foundation in web
          development technologies, including HTML, CSS, and JavaScript. My
          journey into the world of programming has led me to specialize in
          modern frontend frameworks like React and utilize utility-first CSS
          frameworks such as Tailwind CSS. As a passionate learner, I enjoy
          staying up-to-date with the latest trends in web development,
          exploring new technologies, and enhancing my skills to build
          delightful and user-friendly web experiences. During my learning
          journey, I've had the opportunity to work on various projects,
          allowing me to apply and reinforce my knowledge in real-world
          scenarios. I have a keen eye for design, love creating responsive and
          visually appealing interfaces, and always strive for clean and
          maintainable code. Feel free to explore my portfolio to see some of
          the projects I've worked on. I'm excited about the possibilities that
          web development brings, and I'm always open to new challenges and
          collaborations. Outside of coding, I enjoy to play cricket,online-games,singing. Let's
          connect and build something amazing together!
        </p>
      </div>
    </div>
  );
}

export default About;
