import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decHandler() {
    setCount(count - 1);
  }
  function incHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#FFAC1C] flex-col gap-10">
      <div className="text-[#ffff] font-medium text-3xl">
        Increment & Decrement Counter
      </div>
      <div className="flex flex-row bg-white justify-center gap-16 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button
          onClick={incHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="bg-[#FF0000] text-white px-5 py-2 rounded-sm text-lg"
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}

export default App;
