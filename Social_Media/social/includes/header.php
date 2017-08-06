<?php 
	require 'config/config.php';

	// THis means, if the session variable 'username' is set, make it that variable
	if (isset($_SESSION['username'])) {
		$userLoggedIn = $_SESSION['username'];

		// Below is how you show the name
		$user_details_query = mysqli_query($con, "SELECT * FROM users WHERE userName='$userLoggedIn'");
		$user = mysqli_fetch_array($user_details_query);		// returns the column of the searched result as an array

	} else {
		header("Location: register.php");		// if it's not set meaning they're not logged in, send them back to the register page, doing this will not let anyusers access the index.php, because they need to be logged in first to access it
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Social Network</title>
	<!--	Javascript	-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="Assets/js/bootstrap.js"></script>

	<!--	CSS	-->
	<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> <!--	You need this if you want to use font awesome icons-->
	<link rel="stylesheet" type="text/css" href="Assets/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="Assets/css/style.css">
</head>
<body>
	<div class="top_bar">
		<div class="logo">
			<a href="index.php">Swirlfeed!</a>
		</div>

		<!--	This below is how you use font awesome icons	-->
		<nav>
			<a href="">
				<?php echo $user['firstName'] ?>		<!--	This is how you display name the firstName-->


				<!--	This is how you display the userName
					<?php echo $user['userName'] ?>
				-->
			</a>
			<a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-home" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-bell" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-users" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-cog" aria-hidden="true"></i></a>
		</nav>
	</div>

	<div class="wrapper">
		