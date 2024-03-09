import React from "react";
import "../style/projects.css";
import img from "../assets/project.png";
import currency from "../assets/con.png";
import video from "../asset/blog.mp4";
import whatsapp_video from "../asset/whatsapp.mp4";
function Projects() {
  return (
    <div
      className="w-[100%]  m-auto px-4 py-10 my-5 md:w-[100%] md:px-20 bg-[#2F3C7E]"
      id="projects"
    >
      <h1 className="text-3xl w-full text-center font-bold  text-[#FBEAEB] projectHead">
        Recent Projects
      </h1>
      <div className="w-full flex gap-5  flex-col-reverse px-4 py-5 mt-16 border-white border-2 rounded-lg lg:flex-row md:items-start items-center shadow-md shadow-gray-900">
        <div className="w-[90%] text-[#FBEAEB] flex flex-col justify-center md:items-start text-justify md:[75%]">
          <h2 className="text-3xl font-bold md:text-start border-b-white border-b-[1.5px]">
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
              target="_blank"
            >
              Deploy
            </a>
          </div>
        </div>
        <div className=" rounded-md shadow-xl md:w-1/2">
          <video controls className="rounded-md">
            <source src={video} type="video/mp4" />
            {/* <source src="mov_bbb.ogg" type="video/ogg"/> */}
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
      <div className="w-full flex gap-5  flex-col-reverse px-4 py-5 mt-16 border-white border-2 rounded-lg lg:flex-row md:items-start items-center  shadow-md shadow-gray-900">
        <div className="w-[90%] text-[#FBEAEB] flex flex-col justify-center md:items-start text-justify md:[75%]">
          <h2 className="text-3xl font-bold md:text-start border-b-white border-b-[1.10px]">
            Welcome to our <span className="text-yellow-300">WhatsApp Web</span>{" "}
            Application!
          </h2>
          <p className="mt-5 text-justify ">
            Hello and welcome to my WhatsApp web clone application! I've
            completed the entire frontend part of this app. Here's a rundown of
            what you can do:
          </p>
          <div className="mt-2 ">
            <h3 className="text-xl font-bold inline-block mt-2">
              User Chat Page:
            </h3>
            <p>
              Search for your WhatsApp contacts and chat with them. You'll see
              the chat history, including timestamps. Plus, you can send voice
              recordings for a more personal touch.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-2">Profile Page:</h3>
            <p>Check out your profile details here.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-2"> Community Page:</h3>
            <p>View your past community interactions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-2"> Channel Section:</h3>
            <p>Find all WhatsApp channels in one place.</p>
          </div>{" "}
          <div>
            <h3 className="text-xl font-bold mt-2"> Status Page:</h3>
            <p>Keep up with the status updates of your contacts.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-2"> New Chats Section:</h3>
            <p>Discover new contacts and start chatting with them.</p>
          </div>
          <div>
            My goal is to make this chat application feel just like the real
            WhatsApp. Feel free to explore and let me know if you have any
            questions or feedback!
          </div>
          <div className="mt-5 flex gap-4">
            <a
              className="bg-white w-24  text-black py-1 font-bold rounded-lg text-center"
              href="https://github.com/Anujkumar2001/whatsapp_clone.git"
              target="_blank"
            >
              Github
            </a>
            <a
              className="border-white border-2 w-24 text-center  py-1 font-bold rounded-lg"
              href="https://65ebc2c89ed3fb41365c84f4--aquamarine-souffle-389f5b.netlify.app/"
              target="_blank"
            >
              Deploy
            </a>
          </div>
        </div>
        <div className=" rounded-md shadow-xl md:w-1/2">
          <video controls className="rounded-md">
            <source src={whatsapp_video} type="video/mp4" />
            {/* <source src="mov_bbb.ogg" type="video/ogg"/> */}
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
      <div className="w-full flex gap-5  flex-col-reverse px-4 py-5 mt-16 border-white border-2 rounded-lg lg:flex-row items-center md:items-start  shadow-md shadow-gray-900">
        <div className="w-[90%] text-[#FBEAEB] flex flex-col justify-center items-center md:items-start text-justify md:w-[75%]">
          <h2 className="text-3xl font-bold md:text-start">
            Welcome to our{" "}
            <span className="text-yellow-300">Currency Converter </span>{" "}
            Application!
          </h2>
          <p className="mt-5 text-justify  ">
            In this currency converter application, you can input the amount and
            select the country whose currency value you want to view. The
            application will then display the accurate currency value based on
            your selection.
          </p>
          <div className="mt-5 flex gap-4 justify-start ">
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
        <div className=" rounded-md flex  overflow-hidden   ">
          <img className="object-contain  rounded-md" src={currency} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
