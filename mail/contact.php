<?php

  include "../class/Mail.class.php";
  
  $mail = new Mail((Object)[
    "smtp" => true,
    "host" => 'email-ssl.com.br',
    "port" => '587',
    "user" => 'commercial@dafel.com.br',
    "pass" => 'Dafel@commercial123',
    "debug" => 0
  ]);

  $mail->phpMailer->SetLanguage("br");


  $ret = $mail->send((Object)[
    "from" => (Object)[
        "email" => 'site@dafel.com.br',
        "name" => "Site Dafel"
    ],
    "reply" => (Object)[
        "email" =>  $_POST['email'],
        "name" => $_POST['name']
    ],
    "recipients" => [(Object)[
      "name" => 'Grupo Dafel',
      "email" => 'contato@dafel.com.br'
    ]],
    "subject" => 'Contato site Dafel',
    "message" => $_POST['message']
  ]);

  if(!$ret->sent){
    header( "HTTP/1.0 417 Expectation Fail");
  }
?>
