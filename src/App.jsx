import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [number] = useState(100);
  const [inputText, setInputText] = useState("");
  const cat_names = [
    "아비니시안",
    "에게안",
    "아메리칸 밥테일",
    "아메리칸 컬",
    "아메리칸 링테일",
    "아나톨리",
    "키프로스",
    "키프로스 아프로디테",
    "아라비안 마우",
    "아시안",
    "티파니",
    "발리니즈",
    "밤비노",
    "벵갈",
    "버먼",
    "봄베이",
    "브라질리안 쇼트헤어",
    "브리티시 롱헤어",
    "브리티시 쇼트헤어",
    "버미즈",
    "버밀라",
    "캘리포니아 스팽글드",
    "세일론",
    "샹틸리 티파니",
    "샤르트뢰",
    "쵸시",
    "치토",
    "컬러포인트 쇼트헤어",
    "데본 렉스",
    "돈스코이",
    "드웰프",
    "이집션 마우",
    "유러피안 쇼트헤어",
    "이그저틱 롱헤어",
    "폴덱스",
    "포린 화이트",
    "제네타",
    "저먼 렉스",
    "하바나 브라운",
    "하일랜더",
    "히말라얀",
    "재그",
    "재패니즈 밥테일",
    "자바니즈",
    "카나니",
    "카렐리안 밥테일",
    "캬슈미르",
    "카오 마니",
    "킨카로우",
    "쿠릴리안 밥테일",
    "램킨",
    "라펌",
    "라이코이",
    "메인쿤",
    "만달레이",
    "맹크스",
    "메콩 밥테일",
    "민스킨",
    "먼치킨",
    "네벨룽",
    "네바마스커레이드",
    "노르웨이 숲",
    "오시캣",
    "오호스 아즐레스",
    "오리건 렉스",
    "오리엔탈 바이컬러",
    "오리엔탈 롱헤어",
    "오리엔탈 쇼트헤어",
    "오위히 밥",
    "페르시안",
    "팬서렛",
    "피터볼드",
    "픽시 밥",
    "라가머핀",
    "랙돌",
    "라아스",
    "러시안블루",
    "샘 사웨트",
    "사바나",
    "스코티시 폴드",
    "셀커크 렉스",
    "세렝게티",
    "샴",
    "시베리안 숲",
    "싱가푸라",
    "스쿠쿰",
    "스노우슈",
    "소코케",
    "소말리",
    "스핑크스",
    "수팔락",
    "테네시 렉스",
    "타이",
    "통키니즈",
    "토이밥",
    "토이거",
    "터키시 앙고라",
    "터키시 반",
    "반",
    "요크 초콜릿",
  ];
  const [randomItem, setRandomItem] = useState(null);

  const handleClick = () => {
    if (count < number) {
      const randomIndex = Math.floor(Math.random() * cat_names.length);
      const newItem = cat_names[randomIndex];
      setRandomItem(newItem);
      setCount(count + 1);
      alert(newItem);
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value); // 입력된 텍스트를 상태에 업데이트
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      try {
        await axios.post("http://localhost:3001/api/addValue", {
          value: inputText,
        }); // 여기서 '/api/addValue'로 수정
        console.log("Value added successfully!");
      } catch (error) {
        console.error("Error adding value:", error);
      }
    }
  };

  return (
    <div id="Instead">
      <div id="container-one">
        <button id="text-name" onClick={handleClick}>
          Hint
        </button>
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          placeholder="입력해주세요."
          value={inputText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div id="container-two">
        {/* 이미지가 출력될 태그 */}
        <div id="result">JPG</div>
      </div>
    </div>
  );
}

export default App;
