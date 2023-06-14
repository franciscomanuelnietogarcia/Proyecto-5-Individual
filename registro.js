// Usuario y contraseña válidos
const validUsername = "frank16440";
const validPassword = "franker16440";

// Obtener referencias a los elementos del formulario
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Agregar un evento de envío al formulario
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  
  // Obtener los valores de usuario y contraseña ingresados
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;

  // Verificar si los valores coinciden con el usuario y contraseña válidos
  if (usernameValue === validUsername && passwordValue === validPassword) {
    alert("Inicio de sesión exitoso");
    // Aquí puedes redirigir a otra página o realizar otras acciones necesarias después del inicio de sesión exitoso
  } else {
    alert("Usuario o contraseña incorrectos");
  }
  
  // Limpiar los campos de entrada
  usernameInput.value = "";
  passwordInput.value = "";
});