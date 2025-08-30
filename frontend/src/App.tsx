import Header from "./components/Header";
import PromptArea from "./components/PromptArea";
import { useState, useEffect } from "react";

function App() {
  const [inChat, setInChat] = useState(false);

  useEffect(() => {
    if (inChat) {
      
    }
  }, [inChat]);

  function handleSend() {
    console.log("sent");
    setInChat(true);
  }
  return (
    <div>
      <Header />
      <div className="bg-gray-500 h-screen flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl">Talk to AI</h1>
        <div className="flex justify-center items-center">
          <PromptArea />
          <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-3 ml-2 rounded-xl
          transition-all ease-in-out duration-300 text-lg font-semibold"
          onClick={(e) => {e.preventDefault(); handleSend();}}
      >
        Send
      </button>
        </div>
      </div>
    </div>
  );
}

export default App;
