const timerForm=document.getElementById("timer-form");
const start=document.getElementById("start");
const reset=document.getElementById("reset");
const neoguri=document.getElementById("neoguri");
const line=document.querySelector("#timer-line div div");

let oneByOne =0;
let oneByOneRESET=0;

let movingPixel;
let movingIndex=1;

let minutes=document.getElementById("timer-min");
let seconds=document.getElementById("timer-sec");

let startTimer=null;



function timer(){
   let m =parseInt(minutes.value);
   let s =parseInt(seconds.value);
  
if(m!=NaN&&s!=NaN)
{
  if(m==0&&s==0){
     stopTimer();
     movingIndex=0;

  }else if(s!=0){
     s--;
     seconds.value=String(s);
     neoguri.style.transform = `translateX(${movingPixel*movingIndex}px)`;
     line.style.width=`${430-movingPixel*movingIndex*0.95}px`;


  }else if(m!=0&&s==0){
     s=59;
     m--;
     seconds.value=String(s);
     minutes.value=String(m);
     neoguri.style.transform = `translateX(${movingPixel*movingIndex}px)`;
     line.style.width=`${430-movingPixel*movingIndex*0.95}px`;


  }
}else{
     stopTimer();
}
  

}

function stopTimer(){
     clearInterval(startTimer);
     neoguri.style.transform = "translateX(0px)";
     line.style.width="430px";
     minutes.value="0";
     seconds.value="0";
     oneByOne=0;

}



function onhandleTimer(event){
event.preventDefault();
oneByOne++;
console.log(oneByOne)
if(oneByOne>=2) {alert("start 버튼은 한 번만 누르세요!");
oneByOne=1;
return;}

if(parseInt(minutes.value)>=0&&parseInt(seconds.value)>=0){
     startInterval();
     movingPixel= 480/( parseInt(minutes.value)*60+parseInt(seconds.value));

}else{
     alert("0이상의 정수를 입력해주세요!");
     stopTimer();  
     return;
}


}
function startInterval(){
     startTimer=setInterval(function(){
          timer();
          movingIndex++;

     },1000);}


start.addEventListener("click",onhandleTimer);

reset.addEventListener("click", function(){

stopTimer();
})
