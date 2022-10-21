const music = document.querySelector("body svg:first-child");

music.addEventListener("click",onhandleClick);

let one=0;
function onhandleClick(){
     if(one==0)
   { music.style.color="rgb(67, 255, 208)";
    music.style.borderColor="rgb(67, 255, 208)";
     const audio=new Audio("music/Welcome Horizons.mp3");
     audio.play();
     audio.loop="true";
     one++;
   }else{
     return0;
   }

}


