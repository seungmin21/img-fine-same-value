import React from 'react';
import IconTitle from './iconTitle.jsx'

function recordShowPlaces ( {logData} ) {
  return (
    <div className="first-container">
        <div className="iconLogText">
          <IconTitle />
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

export default recordShowPlaces