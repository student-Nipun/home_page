<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "footwear";

$con = mysqli_connect($server , $username , $password , $dbname);

if(!$con)
{
    echo "Not connected";
}
else
{
    echo "connected";
}

// Start

// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $address = $_POST['address'];
// $email = $_POST['email'];

// $sql = "INSERT INTO `nbh`(`Customer name`, `Phone number`, `Address`, `Customer Email ID`) VALUES ('$name','$phone','$address','$email')";

// $result = mysqli_query($con , $sql);

// if($result)
// {
//     echo "Detailed Submitted";
// }
// else{
//     echo "Query Failed....!";
// }
?>