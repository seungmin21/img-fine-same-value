import "./App.css";

function App() {
  return (
    <div id="Instead">
      <div id="container-one">
        <button id="text-name">Hint</button>
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          placeholder="입력해주세요."
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
