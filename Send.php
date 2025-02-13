<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/PHPMailer-master/src/Exception.php';
require '/PHPMailer-master/src/PHPMailer.php';
require '/PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Servidor SMTP (puedes usar otro)
        $mail->SMTPAuth = true;
        $mail->Username = 'citecingsistemas@gmail.com'; // Tu correo
        $mail->Password = 'ritt ovxg soia bkhc'; // Usa una contraseña de aplicación de Google
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Configuración del correo
        $mail->setFrom($email, $nombre);
        $mail->addAddress('ehernandez@citec.com.mx'); // Reemplaza con el correo donde recibirás los mensajes
        $mail->Subject = "Nuevo mensaje de contacto";

        // Adjuntar archivo si existe
        if (!empty($_FILES['archivo']['name'])) {
            $archivo_tmp = $_FILES['archivo']['tmp_name'];
            $archivo_nombre = $_FILES['archivo']['name'];
            $mail->addAttachment($archivo_tmp, $archivo_nombre);
        }

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Body = "<h3>Mensaje enviado desde el formulario</h3>
                      <p><strong>Nombre:</strong> $nombre</p>
                      <p><strong>Email:</strong> $email</p>
                      <p><strong>Mensaje:</strong> $mensaje</p>";

        $mail->send();
        echo "¡Correo enviado exitosamente!";
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
} else {
    echo "Método no permitido";
}
?>
