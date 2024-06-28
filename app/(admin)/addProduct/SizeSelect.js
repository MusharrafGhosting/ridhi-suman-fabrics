import React, { useState } from "react";

const SizeSelect = ({onAddSize}) => {
  const [sizes, setSizes] = useState([]);
  const [inputSize, setInputSize] = useState("");

  const handleAddSize = () => {
    if (inputSize) {
      setSizes((prevSizes) => [...prevSizes, inputSize]);
      onAddSize(inputSize); // Call the onAddSize prop with inputSize
      setInputSize("");
    }
  };

  const handleRemoveSize = (indexToRemove) => {
    setSizes((prevSizes) => prevSizes.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col items-center gap-3 w-auto ">
      <div className="flex gap-2 items-center justify-center relative w-full min-w-[200px] h-10">
        <input
          type="text"
          value={inputSize}
          onChange={(e) => setInputSize(e.target.value)}
          className="peer w-96 h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-1 outline-[#828282] focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
          placeholder="Enter size"
        />
        <button
          className="px-4 py-2  text-5xl rounded  transition"
          onClick={handleAddSize}
        >
          +
        </button>
      </div>
      {/* Display Size  */}
      <div className="mt-2 flex gap-5 flex-wrap w-96">
        {sizes.map((size, index) => (
          <div key={index} className="flex items-center gap-2 mb-2 bg-[#828282] px-3  rounded-lg">
            <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white">
              {size}
            </div>
            {/* <span>{size}</span> */}
            <button
              className="ml-auto text-red-500 font-bold text-3xl"
              onClick={() => handleRemoveSize(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelect;
