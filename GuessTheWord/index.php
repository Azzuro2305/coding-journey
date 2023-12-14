<?php
// Database configuration
$host = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

// Close the connection
$conn->close();
?>