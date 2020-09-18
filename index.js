const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

const enterNumBtn = document.querySelector(".enterNumBtn");

enterNumBtn.addEventListener("click", enterRandomNum);

function generateRandomNum(e) {

  const toNum = 10;

  randomNum = Math.floor((Math.random() * parseInt(toNum)+10));

  
    const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum;
    e.stopPropagation();
  
}
function enterRandomNum(){
	var image1= document.getElementById('image1');
const enterNum = document.querySelector(".enterNum").value;
num = enterNum ;
//console.log(enterNum)
if (num == 20)
	{
		image1.src ="images/img1.jfif";
	}
	else if (num == 15) {
		alert(1);
	}
	else if (num == 17) {
		alert(1);
	}
	 else {
	 	alert(2);
	 }

	




}




document.onkeypress = function(e){
	e = e || window.event;
	if(e.keyCode == 13){
		document.documentElement.classList.toggle('dark-mode');
	}
}
