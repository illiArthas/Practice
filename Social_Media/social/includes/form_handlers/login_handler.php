<?php 



	if (isset($_POST['log_button_FUCK'])) {
		// if login button is pressed

		$email = filter_var($_POST['log_email_FUCK'], FILTER_SANITIZE_EMAIL);		// makes sure email is in correct format

		$_SESSION['log_email_FUCK'] = $email;			// Store email into session variable
		$password = md5($_POST['log_pass_FUCK']);		// hashes the stored password, to get the password


		// checks the database if the database has the typed email and password
		$checkDatabaseQuery = mysqli_query($con, "SELECT * FROM users WHERE email='$email' AND password='$password'");

		// checks how many rows the checkDatabaseQuery variable has
		$checkLoginQuery = mysqli_num_rows($checkDatabaseQuery);	

		// this happens when the user logs in correctly
		if ($checkLoginQuery === 1) {
			$row = mysqli_fetch_array($checkDatabaseQuery);		// this access the data return from the $checkDatabaseQuery
			$username = $row['userName'];						// this gets the data in the userName column of the DB


			//		this is for if the user account is closed, and inside will enable the account again
			$userClosedQuery = mysqli_query($con, "SELECT * FROM users WHERE email='$email' AND user_closed='no'");

			if (mysqli_num_rows($userClosedQuery) === 1) {
				$reopenAccount = mysqli_query($con, "UPDATE users SET user_closed='no' WHERE email='$email'");
			}
			//



			// this is important, caues it checks if the user is logged in
			// if the value is null or nill then that means the user is NOT logged in
			// but if theres a stored value it means the user is logged in, so we store it here
			$_SESSION['username'] = $username;	

			header("Location: index.php");		// this will redirect the page into index.php, if they're logged in
			exit();								// exits

		} else {
			array_push($error_array, "<span style='color: red'>Email or password was incorrect</span><br>");			// using the $error_array that i've already created from the require files
		}
	}
 ?>