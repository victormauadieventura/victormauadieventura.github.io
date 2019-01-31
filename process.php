<?php
$name = stripslashes(trim($_POST['name']));
$email = stripslashes(trim($_POST['email']));
$subject = stripslashes(trim($_POST['subject']));
$message = stripslashes(trim($_POST['message']));
$title = $message;

// Configure your Subject Prefix and Recipient here
$titlePrefix = 'Victor Design - ' . $name . ' | ';
$emailTo = 'victor@victordesign.com.br';

$errors = array(); // array to hold validation errors
$data = array(); // array to pass back data

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($name)) {
        $errors['name'] = "Seu nome &#233; obrigat&#243;rio.";
    }
    if (!preg_match('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', $email)) {
        $errors['email'] = 'Seu e-mail n&#227;o &#233; v&#225;lido.';
    }
    if (empty($subject)) {
        $errors['subject'] = "Assunto &#233; obrigat&#243;rio.";
    }
    if (!isset($message[9])) {
        $errors['message'] = "Digite uma mensagem com mais de 10 caracteres.";
    }
    if (!empty($errors)) {
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        $title = "$titlePrefix $title";
        $body = '
            <strong>Nome: </strong>' . $name . '<br />
            <strong>E-mail: </strong>' . $email . '<br />
            <strong>Assunto: </strong>' . $subject . '<br />
            <strong>Mensagem: </strong>' . nl2br($message) . '<br />
        ';

        $headers  = 'MIME-Version: 1.1' . PHP_EOL;
        $headers .= 'Content-type: text/html; charset=UTF-8' . PHP_EOL;
        $headers .= "From: $name <$email>" . PHP_EOL;
        $headers .= "Return-Path: $emailTo" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;

        mail($emailTo, $title, $body, $headers);

        $data['success'] = true;
        $data['message'] = "Sua mensagem foi enviada com sucesso.";
    }

    // return all our data to an AJAX call
    echo json_encode($data);
}