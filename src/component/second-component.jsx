import React from "react";
import UseGuides from "./useGuides.jsx";

function secondContainer({
  handleClick,
  inputText,
  handleChange,
  handleKeyPress,
}) {
  return (
    <div className="second-container">
      <button id="text-name" onClick={handleClick}>
        Hint
      </button>
      {/* onkeyPress */}
      <input type="text" id="search-bar" name="search-bar" placeholder="입력해주세요." value={inputText} onChange={handleChange} onKeyDown={handleKeyPress} />
      <UseGuides />
    </div>
  );
}

export default secondContainer;
