import React from 'react';
import Description from "./description";

function useGuides() {
  return (
    <div className="use-guides">
    <div className="memoHeaderColor">
      <h3 className="padding-10">사용 가이드</h3>
    </div>
    <Description />
  </div>
  )
}

export default useGuides;