async function fetchLogData (setLogData) {
  try {
    const response = await fetch("http://localhost:3001/api/logData");
    const data = await response.json();
    setLogData(data);
  } catch (error) {
    console.error("Error fetching log data:", error);
  }
};

export default fetchLogData;