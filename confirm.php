<!DOCTYPE html>
<html lang="he"> 
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    />

    <!-- Bootstrap core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Material Design Bootstrap -->
    <link href="/css/mdb.min.css" rel="stylesheet" />
    <!-- Slick Carousel CSS -->
    <link rel="stylesheet" type="text/css" href="carousel/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="carousel/slick/slick-theme.css">

    <!-- Your custom styles (optional) -->
    <link href="/css/style.min.css" rel="stylesheet" />

    <!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css"> -->
 
    <!-- JQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>


    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="js/mdb.min.js"></script>
    <!-- Slick Carousel JavaScript -->
    <script src="carousel/slick/slick.js" type="text/javascript" charset="utf-8"></script>
    <!-- Custom JS -->
    <script type="text/javascript" src="./js/custom.js"></script>

    <title>שבילים || תודה</title>
  </head>

  <body>
  <?php 

    //Database Connection//
    	include "./connection.php";
    //Database Connection//
    
    
    if(isset($_POST['submit'])){
       
        $to = "tonylaviad@gmail.com"; // this is your Email address
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
       	$comments = "'" . $_POST['comments'] . "'";
        if (empty($_POST['comments'])) {
       	$comments = "-- אין הערות --";
        }
       	             
        $new_name = explode(" ", $name);
    
        $subject = "קליניקה ''שבילים'' | ד''ר טוני לביאד";

    	$headers .= 'From: ' . $name . '<'. $email .'>' . "\n";

        $message = "היי טוני, התקבלו הפרטים הבאים בטופס האתר: " . "\n\n" . 
        "שם: " . $name . "\n" . 
        "מספר טלפון: " . $phone . "\n" . 
        "כתובת מייל: " . $email . "\n\n" . 
        "הערות מ" . $new_name[0] . ":" . "\n" . $comments . "\n\n";
        
        
      	@mail($to, $subject, $message, $headers);
  	
    };



 ?>

    <div class="jumbotron jumbotron-fluid z-depth-0 contactPage" id="contactMe">
      <h1><?php
        echo "תודה"." " . $new_name[0] . "!"; 
      ?></h1>
    </div>
    <div class="col-md-8 mx-auto mt-5">
      <h3 class="text-center">
        המספר שלך נשמר אצלי במערכת, ואצור עמך קשר בהקדם האפשרי.
      </h3>
      <p class="text-center mt-4">
        ד"ר טוני לביאד
      </p>
    </div>
    <div class="text-center">
      <a href="./home.html" type="button" class="btn waves-effect waves-light btn-md mt-3" id="confirmButton">לחזרה לדף הבית</a>
    </div>
  </body>
</html>
