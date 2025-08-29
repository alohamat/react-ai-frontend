import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="bg-gray-500 h-screen flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl">Talk to AI</h1>
        <div>
        <input type="text" className="bg-gray-800 w-[75vw] peer h-[5vh] md:w-[40vw] text-white rounded-2xl focus:scale-115 focus:shadow-[0px_0px_30px_5px] shadow-black transition-all ease-in-out duration-300 focus:w-[50vw]"/>
        <button className="bg-blue-500 text-white p-2 ml-2 peer-focus:ml-10 rounded">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
