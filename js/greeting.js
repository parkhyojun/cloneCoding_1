const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting  = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onsLoginSubmit(event){
   event.preventDefault(); //브라우저의 기본동작을 막아주는 역활
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username); 
   paintGreetings(username);

}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; 
    //``주의 <"hello" + username 도 가능하다> 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername ===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onsLoginSubmit);
}else {
    //show the greeting
    paintGreetings(savedUsername);
    
}
