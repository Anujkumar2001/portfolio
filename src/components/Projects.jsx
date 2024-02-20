import React from "react";
import "../style/projects.css";
import img from "../assets/project.png";
import currency from "../assets/con.png";
function Projects() {
  return (
    <div
      className="w-[100%]  m-auto px-4 py-10 my-5 md:w-[100%] md:px-20 bg-[#2F3C7E]"
      id="projects"
    >
      <h1 className="text-3xl w-full text-center font-bold  text-[#FBEAEB] projectHead">
        Recent Projects
      </h1>
      <div className="w-full flex gap-5  flex-col-reverse px-4 py-5 mt-16 border-white border-2 rounded-lg lg:flex-row">
        <div className="min-w-[60%] text-[#FBEAEB] flex flex-col justify-center items-start md:items-start text-justify">
          <h2 className="text-2xl font-bold md:text-start border-b-white border-b-[1.5px]">
            Welcome to our <span className="text-yellow-300">Blog Post </span>{" "}
            Application!
          </h2>
          <p className="mt-5 text-justify ">
            Our user-friendly blog post application provides a seamless
            experience for both new and existing users. With a simple and secure
            login system, users can easily access their accounts and start
            sharing their thoughts and experiences through personalized blog
            posts.
          </p>
          <div className="mt-2 ">
            <h3 className="text-xl font-bold inline-block mt-2">
              User Authentication:
            </h3>
            <p>
              Secure account creation with email and password. Two-factor
              authentication using OTP for enhanced security.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-2">User Dashboard:</h3>
            <p>
              After login, users have access to a personalized dashboard.
              Ability to create, edit, and delete their own blog posts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-2">Post Interaction:</h3>
            <p>
              Users can view and interact with other users' posts. Comment
              functionality allows users to engage with posts. Search
              Functionality: Robust search functionality on the home screen.
              Users can search for specific posts based on keywords.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-2">Guest Access:</h3>
            <p>
              Non-logged-in users can view posts created by others. Limited
              access—no ability to comment or create posts without logging in.
            </p>
          </div>
          <div className="mt-5 flex gap-4">
            <a
              className="bg-white w-24  text-black py-1 font-bold rounded-lg text-center"
              href="https://github.com/Anujkumar2001/blog_post"
              target="_blank"
            >
              Github
            </a>
            <a
              className="border-white border-2 w-24 text-center  py-1 font-bold rounded-lg"
              href="https://65d318b8d7d42af51cae7678--splendid-lokum-7eac97.netlify.app/"
            >
              Deploy
            </a>
          </div>
        </div>
        <div className="p-4 rounded-md projectImg h-[500px]"></div>
      </div>
      <div className="w-full flex gap-5  flex-col-reverse px-4 py-5 mt-16 border-white border-2 rounded-lg lg:flex-row">
        <div className="min-w-[60%] text-[#FBEAEB] flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl font-bold w-[80%] md:text-start">
            Welcome to our{" "}
            <span className="text-yellow-300">Currency Converter </span>{" "}
            Application!
          </h2>
          <p className="mt-5 text-justify  w-[80%]">
            In this currency converter application, you can input the amount and
            select the country whose currency value you want to view. The
            application will then display the accurate currency value based on
            your selection.
          </p>
          <div className="mt-5 flex gap-4 justify-start w-[80%]">
            <a
              className="bg-white w-24  text-black py-1 font-bold rounded-lg text-center"
              href="https://github.com/Anujkumar2001/currency_converter"
              target="_blank"
            >
              Github
            </a>
            <a
              className="border-white border-2 w-24 text-center  py-1 font-bold rounded-lg"
              href="https://65d30d8bc1e04cd215662faa--neon-sfogliatella-ca659e.netlify.app/"
              target="_blank"
            >
              Deploy
            </a>
          </div>
        </div>
        <div className="p-4 rounded-md flex w-full h-full  overflow-hidden">
          <img
            className="object-contain h-full rounded-md"
            src={currency}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
