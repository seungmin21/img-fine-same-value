import React from 'react';
import IconTitle from './iconTitle.jsx'
import Div from './Div.jsx'

function recordShowPlaces ( {logData} ) {
  return (
    <div className="first-container">
        <div className="iconLogText">
          <IconTitle />
          <hr />
          {logData.map((item, index) => (
            //<div className="marginTop-20 marginLeft-16" key={index}>
            //  {item}
            //</div>
            <Div marginTop={20} marginLeft={16} key={index}>{item}</Div>
          ))}
        </div>
      </div>
  )
}

export default recordShowPlaces