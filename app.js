const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY="username";


function onLoginSubmit(event){
     event.preventDefault();
     const username=loginInput.value ;
     loginForm.classList.add(HIDDEN_CLASSNAME);
     localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();  


}
function paintGreetings(){
     const username2=localStorage.getItem(USERNAME_KEY);
     greeting.innerText= `${username2}! 어서와구리`;
     greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings();
}