import Header from "./header";
import { FiMessageSquare } from "react-icons/fi";
import { useState } from "react";
import Chatbot from "./chat-bot";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App" onClick={(e) => e.stopPropagation()}>
      <Header />
      MY CHAT-BOX
      {show && <Chatbot show={show} close={()=>setShow(false)}/>}
      <div className="message_icon w-[60px] h-[60px] bg-purple-500 rounded-full grid place-items-center absolute bottom-0 right-0 mr-5 mb-5 cursor-pointer bounce">
        <button className="relative" onClick={handleShow}>
          <FiMessageSquare size={32} color="white" />
        </button>
      </div>
    </div>
  );
}

export default App;
