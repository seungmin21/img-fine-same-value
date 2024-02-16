import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import getRandomItem from "./module/randomItem.js";
import postValue from "./module/httpRequest.js"
import FirstContainer from "./component/first-component.jsx"
import SecondComponent from "./component/second-component.jsx"
import ThirdContainer from "./component/third-container.jsx"

function App() {
  const [count, setCount] = useState(0);
  const [number] = useState(100);
  const [inputText, setInputText] = useState("");
  const [imagePath, setImagePath] = useState(null);
  const [randomItem, setRandomItem] = useState(null);
  const [logData, setLogData] = useState([]);

  // onClick을 사용하기 위한 함수
  // 랜덤으로 alert에 배열 중에 랜덤으로 요소를 출력
  const handleClick = () => {
    if (count < number) {
      const newItem = getRandomItem();
      setRandomItem(newItem);
      // count = 0 일 때 count++ === count + 1
      setCount(count + 1);
      alert(newItem);
    }
  };

  // onChange를 사용하기 위한 함수로 상태를 바꾸는 함수
  const handleChange = (e) => {
    setInputText(e.target.value); // 입력된 텍스트를 상태에 업데이트
    setImagePath(null);
  };

  // onkeyPress를 사용하기 위한 함수
  const handleKeyPress = async (e) => {
    // trim 공백 제거 문자열 메서드
    if (e.key === "Enter" && inputText.trim() !== "") {
      try {
        await postValue(inputText);

        // 문자열이 일치하는지
        const imageFileName = `${inputText}.jpg`;
        await fetch(`cat-image/${imageFileName}`);
        setImagePath(`cat-image/${imageFileName}`);
      } catch (error) {
        console.error("Error adding value or fetching image:", error);
      }
    }
  };

  useEffect(() => {
    // 마운트(호출) 되는 위치
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/logData");
        const data = await response.json();
        setLogData(data);
      } catch (error) {
        console.error("Error fetching log data:", error);
      }
    };

    // 초기 데이터 로드
    fetchData();

    // 2초마다 데이터 갱신
    const intervalId = setInterval(fetchData, 2000);

    // 컴포넌트가 언마운트되면 interval 정리
    return () => clearInterval(intervalId);
  }, []); // 빈 배열은 처음 한 번만 실행되도록 보장합니다.

  return (
    <div id="Instead">
      <FirstContainer logData={logData} />
      <div className="box"></div>
      <SecondComponent handleClick={handleClick} inputText={inputText} handleChange={handleChange} handleKeyPress={handleKeyPress} />
      <ThirdContainer imagePath={imagePath} />
    </div>
  );
}

export default App;
