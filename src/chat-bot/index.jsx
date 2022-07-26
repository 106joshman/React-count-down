import React from "react";
import image from "../assets/bot.png";
import { FaRegPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  return (
    <>
      <div className="wrapper border rounded-lg bottom-0 right-0 absolute w-[350px] h-[400px] p-3 mr-5 mb-5 bg-[#07120d]">
        <header>
          <div className="head flex flex-row">
            <img
              src={image}
              alt=""
              srcset=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="right text-white">
              <div className="description_name">ChatBot.</div>
              <div className="description_name">Happy</div>
            </div>
          </div>
        </header>
        <div className="chat_wrapper">
          <div className="text_field flex flex-row items-center p-1 h-[50px] bottom-0 absolute mb-3 justify-around bg-[#edeced] rounded-md w-[90%]">
            <input
              type="text"
              name="message"
              id="mssg"
              className=" border-none outline-none bg-transparent"
              placeholder="Enter your message here"
            />
            <div className="bttn items-center ">
              <button className="flex place-items-center text-white bg-[#363062] border-none outline-none rounded-md font-semibold text-base h-[40px] w-[70px]"><FaRegPaperPlane />Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
