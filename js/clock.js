const clock1=document.querySelector("#clock1")
const clock2=document.querySelector("#clock2")

function getClock(){
const date=new Date();
const hours=String(date.getHours()).padStart(2,"0");
const minutes=String(date.getMinutes()).padStart(2,"0");
const seconds=String(date.getSeconds()).padStart(2,"0");
let index = date.getSeconds();

clock1.innerText=`${hours}:${minutes}:`;

/*clock2.background="-webkit-linear-gradient(red,blue)";
clock2.webkitBackgroundClip="text";
clock2.webkitTextFillColor="transparent";
아니 이거 왜 안돼;;
*/
clock2.innerText=`${seconds}`;

if(index<50)
 { index=255-(2*index);
      clock2.style.color=`rgb(255,${index},${index})`;}
else
{index=255-(6*index);
          clock2.style.color=`rgb(255,${index},${index})`;
      }
}

getClock();
setInterval(getClock,1000);