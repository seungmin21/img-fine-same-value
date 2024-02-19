import React from 'react'

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
    <div className="use-guides">
      <div className="memoHeaderColor">
        <h3 className="padding-10">사용 가이드</h3>
      </div>
      <div className="marginTop-10">
        <li>왼쪽의 빈 공간은 사용자가 입력한 내용에 관한 저장소입니다.</li>
        <li>왼쪽 상단의 아이콘은 클릭 시 이 프로젝트의 github 사이트로 방문할 수 있습니다.</li>
        <li>Hint 버튼은 어떤 이름이 있는지 사용자에게 알려줍니다.</li>
        <li>검색 바에 Hint 버튼에서 나온 이름을 입력하고 Enter를 누르면 오른쪽에 이름과 관련된 사진이 나타납니다.</li>
      </div>
    </div>
  </div>
  );
}

export default secondContainer;