<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'tu_correo@ejemplo.com';
    $subject = 'Nuevo mensaje de contacto';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "Nombre: $name\n";
    $body .= "Correo Electrónico: $email\n";
    $body .= "Mensaje:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo 'El mensaje ha sido enviado con éxito.';
    } else {
        echo 'Hubo un problema al enviar el mensaje. Intenta nuevamente más tarde.';
    }
} else {
    echo 'Método de solicitud no válido.';
}
?>
