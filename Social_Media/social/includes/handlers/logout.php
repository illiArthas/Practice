<?php 
	session_start();			// makes sure session is started
	session_destroy();			// destroys session
	header("Location: ../../register.php");
 ?>