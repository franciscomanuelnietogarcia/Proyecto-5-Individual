
const validUsername = "frank16440";
const validPassword = "franker16440";


const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");


loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  

  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;

  if (usernameValue === validUsername && passwordValue === validPassword) {
    alert("Inicio de sesión exitoso");
  
  } else {
    alert("Usuario o contraseña incorrectos");
  }
  
  usernameInput.value = "";
  passwordInput.value = "";
});