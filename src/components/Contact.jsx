import React, { useState } from "react";
import "../style/contact.css";
function Contact() {
  return (
    <div className="w-full bg-[#2F3C7E]  px-4 py-4 mb-5 ">
      <h1 className="text-center mb-12 text-2xl font-bold text-white">
        Contact Me
      </h1>
      <div className="flex  justify-between md:justify-evenly items-center font-bold">
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="w-12 h-12 rounded-full overflow-hidden object-contain">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt=""
            />
          </div>
          <h2>
            <a
              href="https://www.instagram.com/anuj_._._sharma/"
              target="_blank"
              className="hover:text-yellow-200"
            >
              Instagram
            </a>
          </h2>
        </div>{" "}
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="w-12 h-12 rounded-full overflow-hidden object-cover">
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt=""
            />
          </div>
          <h2>
            <a href="#" className="hover:text-yellow-200">
              Linkedin
            </a>
          </h2>
        </div>{" "}
        <div className="flex flex-col items-center gap-2 text-white ">
          <div className="w-12 h-12 rounded-full overflow-hidden object-cover ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
              alt=""
            />
          </div>
          <h2>
            <a
              className="hover:text-yellow-200"
              href="mailto:anujkumar1072001@gmail.com?subject=Inquiry&body=Hello%20there!"
            >
              Gmail
            </a>
          </h2>
        </div>{" "}
      </div>
    </div>
  );
}

export default Contact;
