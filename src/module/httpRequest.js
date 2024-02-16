import axios from "axios"

async function postValue(inputText) {
  try {
    await axios.post("http://localhost:3001/api/addValue", {
      value: inputText,
    })
    console.log("입력값 추가 성공")
  } catch (error) {
    console.error("Error adding value:", error);
    throw error
  }
}

export default postValue