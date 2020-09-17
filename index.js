const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum(e) {

  const toNum = 10;

  randomNum = Math.floor((Math.random() * parseInt(toNum)+10));

  
    const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum;
    e.stopPropagation();
  
}
