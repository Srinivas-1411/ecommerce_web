<?php
session_start();
include("connect.php");

// Check if the user is not logged in and redirect to index.html if true
if (!isset($_SESSION['email'])) {
    header("Location: index.html");
    exit(); // Stop further execution after redirect
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>
<body>
    <div style="text-align:center; padding:15%;">
      <p style="font-size:50px; font-weight:bold;">
       Hello  
       <?php 
       // Display user's first and last name if session is set
       $email = $_SESSION['email'];
       $query = mysqli_query($conn, "SELECT firstName, lastName FROM `users` WHERE email='$email'");
       if ($query && mysqli_num_rows($query) > 0) {
           $row = mysqli_fetch_assoc($query);
           echo htmlspecialchars($row['firstname'] . ' ' . $row['lastname']); // Output sanitized name
       } else {
           echo "User not found";
       }
       ?>
       :)
      </p>
      <a href="logout.php">Logout</a>
    </div>
</body>
</html>
