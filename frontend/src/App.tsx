import Header from "./components/Header";
import PromptArea from "./components/PromptArea";
import { useState } from "react";
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // ou outro tema da tua escolha


function App() {
  const [isBottom, setIsBottom] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    setIsBottom(true);
    setLoading(true);
    try {
      const res = await axios.post('go-ai-chatbot-production.up.railway.app/api/send', { prompt });
      setResponse(res.data);
      setIsBottom(true);
      console.log("response:", res.data);
    } catch (error) {
      console.error("error sending prompt:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-500 h-screen flex flex-col items-center justify-center relative">
      <Header />
      <h1 className="text-4xl mb-4">Talk to AI</h1>

      {isBottom && (
       <div className="absolute flex justify-center items-center z-10">
  <div className="bg-white p-6 rounded-xl shadow-2xl text-black max-h-[80vh] overflow-y-auto
      w-[90vw] sm:w-[85vw] lg:w-[70vw] xl:w-[55vw]"
  >
    {loading ? "Loading response, please wait..." : (
      <div className="prose prose-gray max-w-none">
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
        >
          {response}
        </ReactMarkdown>
      </div>
    )}
  </div>
</div>

      )}

      <div
        className={`flex justify-center items-center transition-all duration-300 
        ${isBottom ? "absolute bottom-4 w-full z-0" : ""}`}
      >
        <PromptArea value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onEnter={handleSend}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-3 ml-2 rounded-xl
          transition-all ease-in-out duration-300 text-lg font-semibold hover:cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}


export default App;
