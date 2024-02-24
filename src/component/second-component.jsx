import React from 'react'
import Description from './description';

function secondContainer({handleClick, inputText, handleChange, handleKeyPress}) {
  return (
    <div className="second-container">
    <button id="text-name" onClick={handleClick}>
      Hint
    </button>
    {/* onkeyPress */}
    <input
      type="text"
      id="search-bar"
      name="search-bar"
      placeholder="입력해주세요."
      value={inputText}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
    {/* 컴포넌트 한번 더 */}
    <div className="use-guides">
      <div className="memoHeaderColor">
        <h3 className="padding-10">사용 가이드</h3>
      </div>
      <Description />
    </div>
  </div>
  );
}

export default secondContainer;