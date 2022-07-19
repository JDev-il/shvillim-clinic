<?php
    $servername = "localhost";
    $username = "uufkinhavy4nu";
    $password = "JVLAdmin2022";

    try {
      $conn = new PDO("mysql:host=$servername;dbname=dbaaapfn2pqb42", $username, $password);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        if (!$conn) {
            die("Connection failed: " . $e->getMessage());
        }
    }
?>
