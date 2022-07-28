import React, { useEffect, useRef, useState } from "react";
import image from "../assets/bot.png";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Chatbox = (props) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const bottomRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    const id = message.length + 1;
    setChats([...chats, { id: id, text: message, completed: false }]);
    setMessage("");
    if (message === "") {
      return false;
    }
  };

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <>
      <div className="wrapper flex flex-col px-1 w-[90%] md:w-[60%] mx-auto">
        <header>
          <div className="head flex flex-row justify-between p-4 rounded-t-xl bg-[#07120d] items-center">
            <div className="left flex flex-row">
              <img
                src={image}
                alt=""
                srcset=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="right text-white ml-2">
                <div className="description_name text-2xl font-semibold">
                  ChatBox.
                </div>
                <div className="description_name text-base text-green-500">
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

        <div className="chat_holder border-gray-500 border rounded-b-xl">
          <div className="chat_wrapper">
            <div className="save-Chat text-white text-center flex p-2 justify-end">
              <ul className="chat_text overflow-y-scroll p-1 h-[20em] md:h-[35em]">
                {chats.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="chat_item  px-3 my-1.5 first-of-type:mt-0 py-0.5 border-none outline-none flex-wrap "
                    >
                      {item.text}
                    </li>
                  );
                })}
                <div ref={bottomRef} />
              </ul>
            </div>
            {/* text_field items-center mx-auto h-[60px] */}
            <div className=" rounded-b-xl border-t-2 border-gray-300 bg-[#000000cc]">
              <form
                action=""
                className="flex justify-between px-1 items-center h-[60px]"
                onSubmit={handleSubmit}
              >
                <div className="w-[80%]">
                  <input
                    type="text"
                    name="message"
                    id="mssg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className=" border-none outline-none p-2 placeholder-blue-500 bg-transparent text-xl placeholder:text-xl text-white rounded-xl w-full"
                    autoComplete={false}
                    placeholder="Message..."
                  />
                </div>
                <div className="bttn text-white bg-[#363062] border-none cursor-pointer outline-none font-semibold text-base rounded-xl items-center flex">
                  <button
                    type="submit"
                    className="flex justify-between py-1 px-3 place-items-center items-center h-[52px]"
                  >
                    <span className="mr-3"> Send</span>
                    <FaRegPaperPlane />
                  </button>
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
