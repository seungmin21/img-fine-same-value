import React from "react";
import { Link } from "react-router-dom";
import H3 from "./H3.jsx"

function iconTitle() {
  return (
    <div className="log-maker">
      <Link to="https://github.com/seungmin21/img-fine-same-value">
        <div className="log-image"></div>
      </Link>
        <H3 marginTop={20}>이미지 사전</H3>
      {/* <h3 className="marginTop-20">이미지 사전</h3> */}
    </div>
  );
}

export default iconTitle;