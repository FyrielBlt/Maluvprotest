<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupérer et sécuriser les champs
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    
        // Config SMTP Gmail
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'beltaiefferiel98@gmail.com';
        $mail->Password   = 'tamm bkgt knmc xwon'; // mot de passe d'application Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Expéditeur et destinataire
        $mail->setFrom('beltaiefferiel98@gmail.com', 'Feriel Beltaief');
        $mail->addAddress('ferielbeltaief00@gmail.com', 'Destinataire');
        $mail->addReplyTo($email, $name); // permet de répondre directement à l'expéditeur

        // Contenu du mail
        $mail->isHTML(true);
        $mail->Subject = "Message depuis le formulaire : $subject";
        $mail->Body    = "
            <strong>Nom :</strong> $name<br>
            <strong>Email :</strong> $email<br>
            <strong>Objet :</strong> $subject<br>
            <strong>Message :</strong><br>" . nl2br($message);

        $mail->AltBody = "Nom: $name\nEmail: $email\nObjet: $subject\nMessage:\n$message";

         if ($mail->send()) {
    echo "OK";  
} else {
    echo "❌ Erreur lors de l’envoi du mail.";
}
    } 

?>
