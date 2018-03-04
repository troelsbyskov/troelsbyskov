<?php
    $name = $_POST['feedbackname'];
    $email = $_POST['feedbackemail'];
    $message = $_POST['feedbackcontent'];
    $from = "Hjemmeside-feedback";
    $to = "troels.byskov@gmail.com";
    $subject = "Feedback fra hjemmeside";

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['feedbacksubmit']) {
        if (mail ($to, $subject, $body, $from)) {
        echo '<p>Din feedback er sendt. Mange tak!</p>';
    } else {
        echo '<p>Noget gik galt. Prøv venligst igen!</p>';
    }
?>
