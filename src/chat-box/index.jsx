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
      alert("Enter your message...");
    }
  };

  return (
    <>
      <div className="wrapper border h-screen rounded-lg bottom-0 right-0 absolute z-10 w-full px-2 pt-7 md:w-[380px] mb-3 mx-auto bg-[#07120d]">
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
                <div className="description_name text-sm text-green-500">
                  Happy
                </div>
              </div>
            </div>
            <div className="close_bttn ">
              <button className="text-white" onClick={props.close}>
                <AiOutlineClose size={32} />
              </button>
            </div>
          </div>
        </header>
        <div className="chat_holder bottom-0 fixed right-0 left-0 mb-6">
          <div className="chat_wrapper w-full">
            <div className="save-Chat text-white mt-3 overflow-y-scroll flex p-2 justify-end">
              <ul className="chat_text ">
                {chats.map((item) => {
                  return (
                    <p
                      key={item.id}
                      className="chat_item px-3 my-3 first-of-type:mt-0 py-0.5 bg-[#306238] border-none outline-none flex-wrap rounded-l-lg rounded-b-lg "
                    >
                      {item.text}
                    </p>
                  );
                })}
              </ul>
            </div>

            <div className="mt-5">
              <form action="" onSubmit={handleSubmit}>
                <div className="text_field flex flex-row items-center mx-auto justify-between w-[95%]">
                  <input
                    type="text"
                    name="message"
                    id="mssg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className=" h-[50px] border-none outline-none p-3 bg-[#edeced] rounded-md w-[75%]"
                    placeholder="Enter your message here"
                  />
                  <div className="bttn text-white bg-[#363062] border-none cursor-pointer outline-none font-semibold text-base rounded-md h-[50px] w-[80px] flex justify-center place-items-center">
                    <button
                      type="submit"
                      className=" flex justify-between place-items-center items-center"
                    >
                      <span className="mr-3"> Send</span>
                      <FaRegPaperPlane />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
