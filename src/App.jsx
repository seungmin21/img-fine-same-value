import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import cat_names from "./nameValue";

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
      const randomIndex = Math.floor(Math.random() * cat_names.length);
      const newItem = cat_names[randomIndex];
      setRandomItem(newItem);
      setCount(count + 1);
      alert(newItem);
    }
  };

  // onChange를 사용하기 위한 함수로 상태를 바꾸는 함수
  const handleChange = (e) => {
    setInputText(e.target.value); // 입력된 텍스트를 상태에 업데이트
    setImagePath(null);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      try {
        await axios.post("http://localhost:3001/api/addValue", {
          value: inputText,
        }); // 여기서 '/api/addValue'로 수정
        console.log("Value added successfully!");

        const imageFileName = `${inputText}.jpg`;
        await fetch(`cat-image/${imageFileName}`);
        setImagePath(`cat-image/${imageFileName}`);
      } catch (error) {
        console.error("Error adding value or fetching image:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/logData");
        const data = await response.json();
        setLogData(data);
      } catch (error) {
        console.error("Error fetching log data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="Instead">
      <div id="Log-Mark">
      {logData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
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
        <h3 className="marginLeft marginBottom">
          원하는 사진이 나오지 않을 수도 있습니다.
        </h3>
        {/* 이미지가 출력될 태그 */}
        <div id="result">
          {imagePath && <img src={imagePath} alt="?" />}
        </div>
      </div>
    </div>
  );
}

export default App;
