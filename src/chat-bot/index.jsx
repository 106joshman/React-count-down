import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import face from "../assets/bot.jpg";

const Bot = (props) => {
  return (
    <div className="wrapper p-2 z-10 overflow-hidden transition ease-in-out duration-150">
      <div className="border rounded-lg p-1 bg-blue-600">
        <div className="close_bttn flex justify-end">
          <button className="text-white" onClick={props.close}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="header flex justify-evenly items-center text-center border-gray-500 border-b shadow-md rounded-md">
          <img
            src={face}
            alt="a welcome bot face"
            className="rounded-full h-[100px] w-[100px]"
            srcSet=""
          />
          <div className="text font-bold text-2xl">Hello!</div>
        </div>
        <div className="wrap mt-5 p-2">
          <p>Hello Welcome to My space.</p>{" "}
          <div className="body_bttn flex flex-col items-start">
            <button>How can I help you?</button>
            <button>Have you heard of chop life gang?</button>
            <button>1 plus 1 ?</button>
            <button>Thank you for testing my Dev Bot. &#9996;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;
