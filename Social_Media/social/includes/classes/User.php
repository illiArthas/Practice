<?php 

	class User {
		private $user;
		private $con;

		public function __construct($con, $user) {
			$this->con = $con;
			$userDetailsQuery = mysqli_query($con, "SELECT * FROM users WHERE userName='$user'");
			$this->user = mysqli_fetch_array($userDetailsQuery);
		}

		public function firstAndLastName() {
			$username = $this->user['userName'];
			$query = mysqli_query($this->con, "SELECT firstName, lastName FROM users WHERE userName='$username'");
			$row = mysqli_fetch_array($query);

			return $row['firstName'] . " " . $row['lastName'];
		}

		public function getUsername() {
			return $this->user['userName'];
		}

		public function getNumPosts() {
			$username = $this->user['userName'];
			$query = mysqli_query($this->con, "SELECT num_posts FROM users WHERE userName='$username'");
			$row = mysqli_fetch_array($query);
			return $row['num_posts'];
		}

		public function isClosed() {
			$username = $this->user['userName'];
			$query = mysqli_query($this->con, "SELECT user_closed FROM users WHERE userName='$username'");
			$row = mysqli_fetch_array($query);
			if ($row['user_closed'] == 'yes') {
				return true;
			} else {
				return false;
			}
		}
	}
 ?>