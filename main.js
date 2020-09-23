const hamburger_icon = document.querySelector('.hamburger')
const navlist =  document.querySelector(' .nav-list ')	;
 
 hamburger_icon.addEventListener('click',()=>
 {
 	 navlist.classList.toggle('open');
 	 hamburger_icon.classList.toggle('active');
 });


 
const winnerimg  =  document.querySelector(' .winnerimg ')	;
const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

const enterNumBtn = document.querySelector(".enterNumBtn");

enterNumBtn.addEventListener("click", enterRandomNum);


function generateRandomNum(e) {

  const toNum = 10;

  randomNum = Math.floor((Math.random() * parseInt(toNum)+10));

  
    const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum;
   // document.getElementById('result').value = randomNum;
  generateBtn.classList.add('afterclick');
}
function enterRandomNum(){
	var image1= document.getElementById('image1');
	var congratulation= document.getElementById('congratulation');
	var fail= document.getElementById('fail');
const enterNum = document.querySelector(".enterNum").value;
num = enterNum ;
//console.log(enterNum)
if (num == 20 )
	{

		winnerimg.classList.toggle('open');
		congratulation.classList.toggle('active');
		image1.src ="images/img1.png";
		fail.classList.remove('fail-p');

	}
	else if(num == 15){
		winnerimg.classList.toggle('open');
		congratulation.classList.toggle('active');
		image1.src ="images/img2.png";
		fail.classList.remove('fail-p');
	}
	else if(num == 18){
		winnerimg.classList.toggle('open');
		congratulation.classList.toggle('active');
		image1.src ="images/img3.png";
		fail.classList.remove('fail-p');
	}
	
	else  {
			fail.classList.toggle('fail-p');
			image1.src ="images/fail.png";
			congratulation.classList.remove('active');
	}

	

                   }



