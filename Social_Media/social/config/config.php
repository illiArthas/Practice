<?php 
	ob_start();						// Turns on output buffering
	session_start();				// This stores the values of variables into a session variable

	$timeZone = date_default_timezone_set("Australia/Brisbane");		// this refers to the time, will be used for recording post time

	// Connection variable
	$con = mysqli_connect("localhost", "root", "", "social");	
	// parameters, 1 localhost, 2 username, 3 password, 4 name of database	

	// Below checks if there's an error connecting to the database
	if (mysqli_connect_errno()) {
		echo "Failed to connect to the database " . mysqli_connect_errno();
		//										   ^ this is a connection error function
	}
?>
	