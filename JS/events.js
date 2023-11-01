var bigImg = document.getElementById("bigImg");
function scaleImg() {
    //this.style.height="100vh";
    var back =  document.createElement("div");
    
    //imgClone.style.position="absolute";
    //document.body.appendChild(imgClone);
  }
  
  bigImg.addEventListener("click", scaleImg);



var hamb = document.querySelector('.hamb');
var nav = document.querySelector('nav');
var mob = document.querySelector('.hamb');
var li = document.querySelectorAll('li');
var a = document.querySelector('a');
//пустой

function navAnim() {
    //nav.classList.add('nav-anim');
  }
  function navAnimBack() {
    //nav.classList.add('nav-anim-back');
  }
console.log(mob.style);
hamb.onclick = () => {
    if (window.getComputedStyle(nav).display=='none'){ //генерация мобильной меню
		    nav.classList.remove('nav-anim-back');
        navAnim();
        nav.style.display = 'block';
		    nav.style.position = 'fixed';
		    nav.style.background = 'rgba(223,223,223,.95)';
        li[0].style.display='block';
        li[1].style.display='block';
        li[2].style.display='block';
        li[3].style.display='block';
        li[4].style.display='block';
        nav.style.width='100%';
        nav.style.height='100vh';
        nav.style.top="50px";
        
		//nav.style.transitionProperty = 'margin-top;';
		//setTimeout(console.log(2), 2000);
	}
	else{
        navAnimBack();
        nav.style.display = 'none';
        //nav.classList.remove('nav-anim'); ЗАПУТАЛСЯ!!!!!!!!!!!!!!!!!!
		
	}
}
// сверху: работа на мобилке
