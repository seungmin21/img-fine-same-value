import React from 'react';
import { Link } from "react-router-dom";

function firstContainer ( {logData} ) {
  return (
    <div className="first-container">
        <div className="iconLogText">
          {/* 컴포넌트 한번 더 */}
          <div className="log-maker">
            <Link to="https://github.com/seungmin21/img-fine-same-value">
              <div className="log-image"></div>
            </Link>
            <h3 className="marginTop-20">이미지 사전</h3>
          </div>
          <hr />
          {logData.map((item, index) => (
            <div className="marginTop-20 marginLeft-16" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
  )
}

export default firstContainer