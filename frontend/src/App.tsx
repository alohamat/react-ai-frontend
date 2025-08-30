import Header from "./components/Header";
import PromptDiv from "./components/PromptDiv";

function App() {
  return (
    <div>
      <Header />
      <div className="bg-gray-500 h-screen flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl">Talk to AI</h1>
          <PromptDiv />
      </div>
    </div>
  );
}

export default App;
