import "./App.css";
import React, { useState, useEffect } from "react";
import getRandomItem from "./module/randomItem.js";
import postValue from "./module/httpRequest.js";
import fetchLogData from "./module/fetchLogData.js"
import FirstContainer from "./component/first-component.jsx";
import SecondComponent from "./component/second-component.jsx";
import ThirdContainer from "./component/third-container.jsx";

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
        // 문자열이 일치하는 것이 완료될때까지 fetch로 이미지 받아오는 것 기다리기
        await fetch(`cat-image/${imageFileName}`);
        setImagePath(`cat-image/${imageFileName}`);
      } catch (error) {
        console.error("Error adding value or fetching image:", error);
      }
    }
  };

  useEffect(() => {
    // 초기 데이터 로드 및 데이터 갱신을 위한 fetchLogData 함수 호출
    fetchLogData(setLogData);

    // 2초마다 데이터 갱신
    const intervalId = setInterval(() => {
      fetchLogData(setLogData);
    }, 2500);

    // 컴포넌트가 언마운트되면 interval 정리
    return () => clearInterval(intervalId);
  }, []);



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
