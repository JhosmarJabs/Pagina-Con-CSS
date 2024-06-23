<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['user'];
    $password = $_POST['password'];
    $edad = $_POST['edad'];

    $errors = [];

    // Validar que todos los campos estén llenos
    if (empty($user) || empty($password) || empty($edad)) {
        $errors[] = "Todos los campos son obligatorios.";
    }

    // Validar que la edad sea un número y que el usuario sea mayor de edad
    if (!is_numeric($edad) || $edad < 18) {
        $errors[] = "La edad debe ser un número y el usuario debe ser mayor de edad (18 años o más).";
    }

    // Validar el usuario y la contraseña
    if ($user !== "luis" || $password !== "mendoza") {
        $errors[] = "Usuario o contraseña incorrectos.";
    }

    if (empty($errors)) {
        echo "<p>Login exitoso. Bienvenido, $user.</p>";
    } else {
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
    }
}
?>