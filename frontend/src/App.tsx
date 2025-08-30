import Header from "./components/Header";
import PromptArea from "./components/PromptArea";
import { useState } from "react";

function App() {
  const [isBottom, setIsBottom] = useState(false);

  return (
    <div className="bg-gray-500 h-screen flex flex-col items-center justify-center relative">
      <Header />
      <h1 className="text-4xl mb-4">Talk to AI</h1>

      {isBottom && (
        <div className="absolute flex justify-center items-center z-10">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-black text-2xl text-center
          w-[90vw] sm:w-[85vw] lg:w-[70vw] xl:w-[55vw]
          ">
            im the biggest bird
          </div>
        </div>
      )}

      <div
        className={`flex justify-center items-center transition-all duration-300 
        ${isBottom ? "absolute bottom-4 w-full z-0" : ""}`}
      >
        <PromptArea />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-3 ml-2 rounded-xl
          transition-all ease-in-out duration-300 text-lg font-semibold hover:cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            //handleSend();
            setIsBottom(!isBottom);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
