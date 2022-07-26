import React, { useState } from "react";
import image from "../assets/bot.png";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Chatbot = (props) => {
  const [chat, setChat] = useState("");
  //   const handleChange = (e) => {
  //     setChat(e.target.value);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(chat);
  };

  return (
    <>
      <div
        className="wrapper border rounded-lg bottom-0 right-0 absolute z-10 w-[350px] h-[400px] md:h-[400px] p-2  mb-3 mx-auto bg-[#07120d]"
      >
        <header>
          <div className="head flex flex-row justify-between">
            <div className="left flex flex-row">
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
            <div className="close_bttn ">
              <button className="text-white" onClick={props.close}>
                <AiOutlineClose size={32} />
              </button>
            </div>
          </div>
        </header>
        <div className="chat_wrapper">
          <form action="" onSubmit={handleSubmit}>
            <div className="text_field flex flex-row items-center bottom-0 absolute mb-3 justify-between w-[95%]">
              <input
                type="text"
                name="message"
                id="mssg"
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                className=" h-[50px] border-none outline-none p-3 bg-[#edeced] rounded-md w-[75%]"
                placeholder="Enter your message here"
              />
              <div className="bttn items-center flex justify-evenly place-items-center text-white bg-[#363062] border-none outline-none font-semibold text-base rounded-md h-[50px] w-[80px]">
                <FaRegPaperPlane />
                <input
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
