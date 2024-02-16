import catNames from "./nameValue.js"

function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * catNames.length);
  return catNames[randomIndex];
}

export default getRandomItem