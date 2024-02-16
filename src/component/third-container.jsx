import React from "react";

export default function ThirdContainer({imagePath}) {
  return (
    // 3번째 컨테이너를 지칭
    <div id="third-container">
      <h3 className="marginLeft-210 marginBottom-20">
        *주의* 사진이 못생겼을 수도 있습니다.
      </h3>
      {/* 이미지가 출력될 태그 */}
      <div id="result">{imagePath && <img src={imagePath} alt="?" />}</div>
    </div>
  );
}