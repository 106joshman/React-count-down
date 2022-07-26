import React, { useState } from "react";
import image from "../assets/bot.png";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Chatbox = (props) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  //   const handleChange = (e) => {
  //     setChat(e.target.value);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    // setChats(message);
    const id = message.length + 1;
    setChats([...chats, { id: id, text: message, completed: false }]);
    setMessage("");
    if (!message) {
      alert("Enter your message...")
    }
  };

  return (
    <>
      <div className="wrapper border rounded-lg bottom-0 right-0 absolute z-10 w-full p-2 md:w-[380px] mb-3 mx-auto bg-[#07120d]">
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
                <div className="description_name font-semibold">ChatBox.</div>
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
          <div className="save-Chat text-white mt-3 items-end flex justify-end">
            <ul>
              {chats.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="px-3 my-3 first-of-type:mt-0 py-0.5 bg-[#306238] border-none outline-none max-w-[280px] max-h-min overflow-scroll flex-wrap rounded-l-lg rounded-b-lg"
                  >
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className="text_field flex flex-row items-center bottom-0 mx-auto mb-3 justify-between w-[95%]">
              <input
                type="text"
                name="message"
                id="mssg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" h-[50px] border-none outline-none p-3 bg-[#edeced] rounded-md w-[75%]"
                placeholder="Enter your message here"
              />
              <div className="bttn items-center flex justify-evenly place-items-center text-white bg-[#363062] border-none cursor-pointer outline-none font-semibold text-base rounded-md h-[50px] w-[80px]">
                <button type="submit">Send</button>
                <FaRegPaperPlane />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
