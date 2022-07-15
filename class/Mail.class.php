<?php

    include "../PHPMailer/class.phpmailer.php";

	class Mail
	{
		public $phpMailer;

		public function __construct( $params )
		{
			$this->phpMailer = new PHPMailer();

            if( $params->smtp ){
			    $this->phpMailer->IsSMTP();
            }

			$this->phpMailer->SMTPDebug = $params->debug;
			$this->phpMailer->Debugoutput = "html";
			$this->phpMailer->CharSet = "UTF-8";
			$this->phpMailer->SMTPAuth = true;
			$this->phpMailer->IsHTML(true);

            if( $params->host == "smtp.gmail.com" ) {
                $this->phpMailer->SMTPSecure = "ssl";
            }

			$this->phpMailer->Port = $params->port;
			$this->phpMailer->Host = $params->host;
			$this->phpMailer->Username = $params->user;
			$this->phpMailer->Password = $params->pass;
		}
		
		public function send( $params )
		{
            if( @$params->reply ){
                $this->phpMailer->AddReplyTo( $params->reply->email, $params->reply->name );
            }

		    if(@$params->from){
			    $this->phpMailer->setFrom( explode("@",$this->phpMailer->Username)[1] == explode("@",$params->from->email)[1] ? $params->from->email : $this->phpMailer->Username, $params->from->name );
            } else {
                $this->phpMailer->setFrom( $this->phpMailer->Username, $this->phpMailer->Username );
            }

			$this->phpMailer->Subject = $params->subject;

			foreach( $params->recipients as $recipient ){
			    $this->phpMailer->AddAddress( $recipient->email, $recipient->name );
			}

            $this->phpMailer->Body = $params->message;
            $this->phpMailer->AltBody = $params->message;
            $sent = $this->phpMailer->Send();

            $this->phpMailer->ClearAllRecipients();
            $this->phpMailer->ClearAttachments();

            return (Object)[
                "sent" => $sent,
                "ErrorInfo" => @$sent ? NULL : $this->phpMailer->ErrorInfo
            ];
		}
	}

?>