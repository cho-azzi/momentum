const API_KEY="79acdef3e2ce64d7194ffbb7612c9db8"

function onGeoOk(position){
const lat=position.coords.latitude;
const lon=position.coords.longitude;
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

fetch(url).then(response => response.json()).then((data)=>{
   
     const weather =document.querySelector("#weather span:last-child");
     weather.innerText = `오늘 ${data.name}의 날씨는 ${data.main.temp}℃ 입니다`;
});

}
function onGeoError(){
alert("위치를 찾을 수 없습니다.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
