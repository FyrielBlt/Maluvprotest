<?php
require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $date = htmlspecialchars(trim($_POST['date'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "❌ Email invalide.";
        exit;
    }

    $mail = new PHPMailer(true);

    
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'beltaiefferiel98@gmail.com';
        $mail->Password = 'tamm bkgt knmc xwon'; // Remplace par variable sécurisée
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('beltaiefferiel98@gmail.com', 'Feriel Beltaief');
        $mail->addAddress('ferielbeltaief00@gmail.com', 'Destinataire');

        $mail->isHTML(true);
        $mail->Subject = "Nouveau rendez-vous de $name";
        $mail->Body = "
            <h2>Nouvelle demande de rendez-vous</h2>
            <p><b>Nom:</b> $name</p>
            <p><b>Email:</b> $email</p>
            <p><b>Téléphone:</b> $phone</p>
            <p><b>Date:</b> $date</p>
            <p><b>Message:</b> $message</p>
        ";

        if ($mail->send()) {
    echo "OK";  
} else {
    echo "❌ Erreur lors de l’envoi du mail.";
}

    } 

?>
