async function RefreshLogData() {
  const fetchLogData = require('fetchLogData.js');

  fetchLogData();

   // 2초마다 데이터 갱신
  const intervalId = setInterval(fetchLogData, 2000);

  // 컴포넌트가 언마운트되면 interval 정리
  return () => clearInterval(intervalId);
}

export default RefreshLogData

