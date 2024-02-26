import React from "react";

function description() {
  return (
    <div className="marginTop-10">
      <li>왼쪽의 빈 공간은 사용자가 입력한 내용에 관한 저장소입니다.</li>
      <li>
        왼쪽 상단의 아이콘은 클릭 시 이 프로젝트의 github 사이트로 방문할 수
        있습니다.
      </li>
      <li>Hint 버튼은 어떤 이름이 있는지 사용자에게 알려줍니다.</li>
      <li>
        검색 바에 Hint 버튼에서 나온 이름을 입력하고 Enter를 누르면 오른쪽에
        이름과 관련된 사진이 나타납니다.
      </li>
    </div>
  );
}

export default description;