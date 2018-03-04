User-Agent: troelsbyskov
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
        echo "Din feedback er sendt. Mange tak!" . " -" . "<a href='/kontakt.html' style='text-decoration:none;color:#ff0099;'> Tilbage</a>";
    } else {
        echo '<p>Noget gik galt. Prøv venligst igen!</p>';
    }
?>
