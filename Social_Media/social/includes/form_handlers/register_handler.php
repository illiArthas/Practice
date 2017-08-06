<?php	
	// Below are declaring variables to prevent errors
	$fName = "";				//first name
	$lName = "";				//last name
	$email = "";				//email
	$email2 = "";				//confirm email
	$pass = "";					//password
	$pass2 = "";				//confirm password	
	$date = "";					//sign up date
	$error_array = array();		// holds error messages

	if (isset($_POST['register_button'])) {
		// Registration form values

		// First name
		$fName = strip_tags($_POST['fName_FUCK']);	// removes html tags i.e. <a>
		$fName = str_replace(' ', '', $fName);		// removes spaces
		$fName = ucfirst(strtolower($fName));		// turns first letter into capital
		$_SESSION['fName_FUCK'] = $fName;			// Stores first name into session variable

		// Last name
		$lName = strip_tags($_POST['lName_FUCK']);	
		$lName = str_replace(' ', '', $lName);		
		$lName = ucfirst(strtolower($lName));		
		$_SESSION['lName_FUCK'] = $lName;			// Stores last name into session variable

		// Email
		$email = strip_tags($_POST['email_FUCK']);	
		$email = str_replace(' ', '', $email);		
		$email = ucfirst(strtolower($email));	
		$_SESSION['email_FUCK'] = $email;			// Stores email into session variable

		// Confirm email
		$email2 = strip_tags($_POST['confEmail_FUCK']);	
		$email2 = str_replace(' ', '', $email2);		
		$email2 = ucfirst(strtolower($email2));	
		$_SESSION['confEmail_FUCK'] = $email2;		// Stores confirm email into session variable

		// Password
		$pass = strip_tags($_POST['pass_FUCK']);	
		$pass2 = strip_tags($_POST['confPass_FUCK']);	// confirm password

		// Date
		$date = date("Y-m-d");							// gets current date

		// If emails match
		if ($email === $email2) {
			// Check if email is in valid format
			 if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
			 	// THis means, if it passes, set email into this
			 	$email = filter_var($email, FILTER_VALIDATE_EMAIL);

			 	// Check if email already exists
			 	$email_check = mysqli_query($con, "SELECT email FROM users WHERE email='$email'");  //selects email column to check if it already has the variable $email

			 	// Count the number of rows returned
			 	// If it returns something, then it means that the email is already in use
			 	$num_rows = mysqli_num_rows($email_check);	// this $num_rows variable will now contain the results from the $email_check query, hopefully the number of rows are 0

			 	if ($num_rows > 0) {
			 		array_push($error_array, "Email already in use<br>");
			 		// THESE PUSH methods stores the error into the $error_array variable
			 	}

			 } 
			 else {
			 	array_push($error_array, "Invalid email format<br>");
			 }
		} 
		else {
			array_push($error_array, "Emails don't match<br>");;
		}

		// Check first name and last name length
		if ((strlen($fName) > 25 || strlen($fName) < 2) || (strlen($lName) > 25 || strlen($lName) < 2)) {
			array_push($error_array, "First name OR Last name must be between 2 - 25 characters<br>");
		}

		// Check password
		if ($pass != $pass2) {
			array_push($error_array, "Passwords don't match<br>");;
		} 
		else {
			if (preg_match('/[^A-Za-z0-9]/', $pass)) {
				array_push($error_array, "Your password can only contain english characters or numbers<br>");
			}
		}

		// Check password length
		if (strlen($pass) > 30 || strlen($pass) < 5) {
			array_push($error_array, "Your password must be between 5 - 30 characters<br>");
		}

		// If the error_array is empty, meaning that there's no error when inputting values into the form
		if (empty($error_array)) {
			$pass = md5($pass);			// encrypts the password into an md5 before sending to database

			// Below is not related to capstone, but is worth knowing
			// Below it's creating a username by concatinating first name and lastname
			$username = strtolower($fName . "_" . $lName);	// this could look like levi_hugo
			// Below checks if the newly created username is already in the database
			$check_username_query = mysqli_query($con, "SELECT userName FROM users WHERE userName='$username'");

			$i = 0;
			// if username exists add number to username
			while (mysqli_num_rows($check_username_query) != 0) {
				// in the while loop is means, if results from check username is NOT 0 then
				$i++;
				$username = $username . "_" . $i; 		// this could look like levi_hugo_1
				$check_username_query = mysqli_query($con, "SELECT userName FROM users WHERE userName='$username'");
				// above keeps checking if the username is already created and keeps adding 1 to $i
			}

			// Profile picture assignment
			$rand = rand(1, 2);		// random number between 1 and 2
			// Below picks a random icon
			if ($rand === 1) {
				$profile_pic = "Assets/images/profile_pics/defaults/iconY.png";
			} else {
				$profile_pic = "Assets/images/profile_pics/defaults/iconG.png";
			}


			// Below inserts the values into the database
			$query = mysqli_query($con, "INSERT INTO users VALUES ('', '$fName', '$lName', '$username', '$email', '$pass', '$date', '$profile_pic', '0', '0', 'no', ',')");

			// Below adds the message if the user logs in properly
			array_push($error_array, "<span style='color: #14C800'>You're all set! Go ahead and login</span><br>");

			// clear session variables, this removes the pre-written names on the register
			$_SESSION['fName_FUCK'] = "";
			$_SESSION['lName_FUCK'] = "";
			$_SESSION['email_FUCK'] = "";
			$_SESSION['confEmail_FUCK'] = "";

		}
	}
?>