import Header from "./header";
import { FiMessageSquare } from "react-icons/fi";
import { useState } from "react";
import Chatbox from "./chat-box";
import bot from "./assets/370.png";
import Bot from "./chat-bot";

function App() {
  const [showBox, setShowBox] = useState(false);
  const [showBot, setShowBot] = useState(false);

  const handleShowBox = () => {
    setShowBox(!showBox);
  };
  const handleShowBot = () => {
    setShowBot(!showBot);
  };

  return (
    <div className="App" onClick={(e) => e.stopPropagation()}>
      <Header />
      <p className="text-center font-bold">MY CHAT-BOTX &#10084;</p>

      <div className="launch_button flex justify-between items-center">
        <div className="bot_left">
          <div
            className="message_icon w-[60px] h-[60px] bg-black rounded-full grid place-items-center animate-bounce m-2 cursor-pointer"
            title="Chat bot"
          >
            <button className="" onClick={handleShowBot}>
              <img
                src={bot}
                alt="bot"
                className="rounded-full h-[50px] w-[50px]"
              />
            </button>
          </div>
        </div>

        <div className="instruction">👈🏾{" "}Tap any button{" "}👉🏾</div>

        <div
          className="message_icon w-[60px] h-[60px] bg-purple-500 rounded-full grid place-items-center m-2 animate-bounce cursor-pointer"
          title="Chat box"
        >
          <button className="" onClick={handleShowBox}>
            <FiMessageSquare size={32} color="white" />
          </button>
        </div>
      </div>

      {showBox && (
        <div className="wrap">
          <Chatbox showBox={showBox} close={() => setShowBox(false)} />
        </div>
      )}

      {showBot && (
        <div className="bot_wrap">
          <Bot showBot={showBot} close={() => setShowBot(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
