document.getElementById('loginForm').addEventListener('submit', function(event) {
    let errorMessages = '';
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const edad = document.getElementById('edad').value;

    if (!user || !password || !edad) {
        errorMessages += '<p>Todos los campos son obligatorios.</p>';
    }
    if (isNaN(edad) || edad < 18) {
        errorMessages += '<p>La edad debe ser un número y el usuario debe ser mayor de edad (18 años o más).</p>';
    }
    if (errorMessages) {
        document.getElementById('errorMessages').innerHTML = errorMessages;
        event.preventDefault();
    }
});