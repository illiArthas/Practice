<?php 
	include("includes/header.php");
	include("includes/classes/User.php");
	include("includes/classes/Post.php");
	//session_destroy();			// this destroys the session, meaning it destroys the $_SESSION['username'], if this happens you won't be able to access this page unless you're logged in


	// If the post button has been clicked, this submits the post details into the database
	if (isset($_POST['post'])) {
		$post = new Post($con, $userLoggedIn);
		$post->submitPost($_POST['post_text'], 'none');
	}
 ?>
	<div class="user_details column">
		<!--	This is how you show the profile picture of the user	-->
		<a href="<?php echo $userLoggedIn; ?>"> <img src="<?php echo $user['profile_pic']; ?>"></a>


		<!--	this is the user details on the side of the picture	-->
		<div class="user_details_left_right">
			<a href="<?php echo $userLoggedIn; ?>">
			<?php 
				echo $user['firstName'] . " " . $user['lastName'] . "<br>";
			 ?>
			 </a>

			 <?php 
			 	echo "Posts " . $user['num_posts'] . "<br>";
			 	echo "Likes " . $user['num_likes'];
			  ?>
		</div>	  
	</div>

	<!--	This is the column on the right	-->
	<div class="main_column column">
		<form class="post_form" action="index.php" method="POST">
			<textarea name="post_text" id="post_text" placeholder="Got something to say?"></textarea>
			<input type="submit" name="post" id="post_button" value="Post">
			<hr>
		</form>

		<!--	This is how you use User.php class and the method firstAndLastName	-->
		<?php 

			$post = new Post($con, $userLoggedIn);
			$post->loadPostsFriends();
		 ?>
	</div>


</div>	<!--	This div is the closing tag of header.php <div class="wrapper">	-->
</body>
</html>