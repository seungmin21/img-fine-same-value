import React from "react";

function importData({ logData }) {
  return (
    <div>
      {logData.map((item, index) => (
        <div className="marginTop-20 marginLeft-16" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default importData;