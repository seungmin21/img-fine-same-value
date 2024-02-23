import React from 'react';

const CustomHeading = ({ marginTop, children }) => {
  const style = {
    marginTop: `${marginTop}px`,
  };

  return <h3 style={style}>{children}</h3>;
};

export default CustomHeading;

// style은 객체야 
// style은 안에 className이라는 키가 있다.
// 그리고 className이라는 키는 className이라는 매개변수 값을 가지고 있다.
// className={"  "}