import React from "react";
import image from "../assets/bot.png";
import { FaRegPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  return (
    <>
      <div className="wrapper border rounded-lg bottom-0 right-0 absolute w-[350px] h-[550px] md:h-[400px] p-3 mr-5 mb-5 mx-auto bg-[#07120d]">
        <header>
          <div className="head flex flex-row">
            <img
              src={image}
              alt=""
              srcset=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="right text-white ml-2">
              <div className="description_name font-semibold">ChatBot.</div>
              <div className="description_name text-green-500">Happy</div>
            </div>
          </div>
        </header>
        <div className="chat_wrapper">
          <div className="text_field flex flex-row items-center bottom-0 absolute mb-3 justify-between w-[95%]">
            <input
              type="text"
              name="message"
              id="mssg"
              className=" h-[50px] border-none outline-none p-3 bg-[#edeced] rounded-md w-[75%]"
              placeholder="Enter your message here"
            />
            <div className="bttn items-center">
              <button className="flex justify-center place-items-center text-white bg-[#363062] border-none outline-none font-semibold text-base rounded-md h-[50px] w-[70px]"><FaRegPaperPlane />Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
