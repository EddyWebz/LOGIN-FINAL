/* script.js */

// Selecciona el botón de inicio de sesión
const signInButton = document.getElementById('signIn');

// Selecciona el botón de registro
const signUpButton = document.getElementById('signUp');

// Selecciona el botón para cambiar a la vista de inicio de sesión
const switchToSignInButton = document.getElementById('switchToSignIn');

// Selecciona el botón para cambiar a la vista de registro
const switchToSignUpButton = document.getElementById('switchToSignUp');

// Selecciona el contenedor principal
const container = document.getElementById('container');

// Agrega un event listener al botón de inicio de sesión
signInButton.addEventListener('click', () => {
    console.log('SignIn button clicked'); // Depuración
    container.classList.remove('right-panel-active'); // Remueve la clase que activa el panel derecho
});

// Agrega un event listener al botón de registro
signUpButton.addEventListener('click', () => {
    console.log('SignUp button clicked'); // Depuración
    container.classList.add('right-panel-active'); // Añade la clase que activa el panel derecho
});

// Agrega un event listener al botón para cambiar a la vista de inicio de sesión
switchToSignInButton.addEventListener('click', () => {
    console.log('Switch to SignIn button clicked'); // Depuración
    container.classList.remove('right-panel-active'); // Remueve la clase que activa el panel derecho
});

// Agrega un event listener al botón para cambiar a la vista de registro
switchToSignUpButton.addEventListener('click', () => {
    console.log('Switch to SignUp button clicked'); // Depuración
    container.classList.add('right-panel-active'); // Añade la clase que activa el panel derecho
});
