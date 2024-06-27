// ColorSelect.js
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const colors = [
  "Red", "Lime", "Blue", "Yellow", "Magenta", "Cyan", "Maroon", "Olive", "Green", "Purple", "Teal", "Navy", "Black"
];

const ColorSelect = ({ onAddColor }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleAddColor = () => {
    onAddColor(selectedColor);
  };

  return (
    <div className="flex gap-2 items-center justify-center ">
      <div className="w-96">
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
      >
        {colors.map((color) => (
          <option key={color} value={color} style={{ backgroundColor: color }} className="hover:cursor-pointer">
            {color}
          </option>
        ))}
      </select>
      </div>
      <div>
      <button
        className=" px-4 py-2  text-5xl rounded  transition"
        onClick={handleAddColor}
      >
        +
      </button>
      </div>
    </div>
  );
};

export default ColorSelect;
