<?php
$servername = "fantasysports.cvut0y8wktov.us-west-2.rds.amazonaws.com";
$username = "root";
$password = "hamyharrymic";
$dbname = "fantasysports";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$token = $_POST['token'];

$sql = "INSERT INTO AuthToken (Token, Date)
VALUES ($token, date("Y-m-d H:i:s"))";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>