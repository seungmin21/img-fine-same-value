import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const number = 100;
  let count = 0;

  const handleHintClick = () => {
    if (count < number) {
      fetch('http://localhost:3001/getData')
        .then(response => response.json())
        .then(data => {
          const cat_name = data.cat_name;
          const randomIndex = Math.floor(Math.random() * cat_name.length);
          const randomItem = cat_name[randomIndex];
          alert(randomItem);
          count++;
        })
        .catch(error => console.error('Error fetching Data:', error));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendValue();
      showImage();
    }
  };

  const showImage = () => {
    fetch('http://localhost:3001/getImage')
      .then(response => response.json())
      .then(data => {
        const images = data.images;
        const selectedImage = images[searchValue];
        if (selectedImage) {
          setSelectedImage(selectedImage);
        } else {
          alert('일치하는 이미지를 찾을 수 없습니다.');
        }
      })
      .catch(error => console.error('Error fetching Data:', error));
  };

  const sendValue = () => {
    fetch('/addValue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: searchValue }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was an error:', error);
      });
  };

  useEffect(() => {
    // You can add any initial setup here
  }, []);

  return (
    <div id="root">
      <div id="container-one">
        <button id="text-name" onClick={handleHintClick}>
          Hint
        </button>
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          placeholder="입력해주세요."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div id="container-two">
        <div id="result">
          JPG
          {selectedImage && (
            <img src={selectedImage} alt={`${searchValue} 이미지`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
