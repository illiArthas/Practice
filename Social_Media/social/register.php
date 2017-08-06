<?php 
	require 'config/config.php';
	require 'includes/form_handlers/register_handler.php';
	require 'includes/form_handlers/login_handler.php';
?>

<!DOCTYPE html>
<html>
<head>
	<title>Social Media - Register</title>
	<link rel="stylesheet" type="text/css" href="Assets/css/register_style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script type="text/javascript" src="Assets/js/register.js"></script>
</head>
<body>

	<?php 
		if (isset($_POST['register_button'])) {
			echo '
				<script>
					$(document).ready(function() {
						$("#first").hide();
						$("#second").show();
					});
				</script>
			';
		}
	 ?>

	<div class="wrapper">
		<div class="login_box">
			<div class="login_header">
				<h1>Swirlfeed!</h1>
				Login or Sign up below
			</div>
			
			<!--	This div "first" and "second" will be used to hide the elements when clicked		-->
			<div id="first">
					<!--	Login form below	-->
				<form action="register.php" method="POST">
					<input type="email" name="log_email_FUCK" placeholder="Email address" required value="<?php 
						if (isset($_SESSION['log_email_FUCK'])) {
							// if name is already typed, leave the value here
							echo $_SESSION['log_email_FUCK'];
						}
					 ?>">
					<br>
					<input type="password" name="log_pass_FUCK" placeholder="Password" required>
					<br>
					<!--	Shows error message if email or password are incorrect	-->
					<?php 
						if (in_array("<span style='color: red'>Email or password was incorrect</span><br>", $error_array)) {
							echo "<span style='color: red'>Email or password was incorrect</span><br>";
						}
					 ?>
					 <br>
					<button type="submit" name="log_button_FUCK">Login</button>
					<br>
					
					 <a href="#" id="signup" class="signup">Need an account? Register here!</a>
				</form>
			</div>

			<br>

			<!--	This div "first" and "second" will be used to hide the elements when clicked		-->
			<div id="second">
								<!--	Register form below			-->
				<form action="register.php" method="POST">
					<input type="text" name="fName_FUCK" placeholder="Firstname ...." required value="<?php 
						if (isset($_SESSION['fName_FUCK'])) {
							echo $_SESSION['fName_FUCK'];
							// if name is already typed, leave the value here
						}
					 ?>">
					<br>
					<input type="text" name="lName_FUCK" placeholder="Lastname ...." required value="<?php 
						if (isset($_SESSION['lName_FUCK'])) {
							echo $_SESSION['lName_FUCK'];
						}
					 ?>">
					<br>
						<!-- This will display the error below	for first name and last name-->
						<?php 
							// The if statement means that if the contents in parameter1(in this case a string) are found in parameter2(in this care it's an array) then do the following code below
							if (in_array("First name OR Last name must be between 2 - 25 characters<br>", $error_array)) {
								echo "First name OR Last name must be between 2 - 25 characters<br>";
							}
						 ?>
					<input type="email" name="email_FUCK" placeholder="Email ...." required value="<?php 
						if (isset($_SESSION['email_FUCK'])) {
							echo $_SESSION['email_FUCK'];
						}
					 ?>">
					<br>
					<input type="email" name="confEmail_FUCK" placeholder="Confirm Email ...." required value="<?php 
						if (isset($_SESSION['confEmail_FUCK'])) {
							echo $_SESSION['confEmail_FUCK'];
						}
					 ?>">
					<br>
						<!-- This will display the error messages below	for email-->
						<?php 
							if (in_array("Email already in use<br>", $error_array)) {
								echo "Email already in use<br>";

							} else if (in_array("Invalid email format<br>", $error_array)) {
								echo "Invalid email format<br>";

							} else if (in_array("Emails don't match<br>", $error_array)) {
								echo "Emails don't match<br>";
							}
						 ?>

					<input type="password" name="pass_FUCK" placeholder="Password ...." required>
					<br>
					<input type="password" name="confPass_FUCK" placeholder="Confirm Password ...." required>
					<br>
					<!-- This will display the error messages below	for password-->
						<?php 
							if (in_array("Passwords don't match<br>", $error_array)) {
								echo "Passwords don't match<br>";

							} else if (in_array("Your password can only contain english characters or numbers<br>", $error_array)) {
								echo "Your password can only contain english characters or numbers<br>";

							} else if (in_array("Your password must be between 5 - 30 characters<br>", $error_array)) {
								echo "Your password must be between 5 - 30 characters<br>";
							}
						 ?>
					<button type="submit" name="register_button">Register</button>
					<br>

					<!-- If all values in the form sections are correct, this message will show about how they succesfully logged in -->
					<?php 
						if (in_array("<span style='color: #14C800'>You're all set! Go ahead and login</span><br>", $error_array)) {
							echo "<span style='color: #14C800'>You're all set! Go ahead and login</span><br>";
						}
					 ?>
					<a href="#" id="signin" class="signin">Already have an account? Sign in here!</a>
				</form>
			</div>
		</div>
	</div>

</body>
</html>