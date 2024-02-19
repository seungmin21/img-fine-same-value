async function fetchLogData(setLogData) {
  try {
    const response = await fetch("http://localhost:3001/api/logData");
    const data = await response.json();
    setLogData = data
  } catch (error) {
    console.error("Error fetching log data:", error);
    // 예외 에러 처리를 한번 더 함으로 상위 컴포넌트에서 예외 에러가 발생했을 때 대처
    throw error;
  }
}

export default fetchLogData