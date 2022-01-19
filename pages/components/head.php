<?php
require_once "functions.php";

$initPath = "$_SERVER[REQUEST_URI]";
$explodePathname = explode("/", $initPath);
$pathName = explode(".", end($explodePathname))[0];

?>

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
<meta http-equiv="x-ua-compatible" content="ie=edge" />

<meta name="language" content="HE">

<!-- switch case pathname -->
<?php
    getHeader($pathName);
?>

<?php if ($pathName === "home") { ?>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <!-- Material Design Bootstrap -->
    <link href="css/mdb.min.css" rel="stylesheet" />
    <!-- Slick Carousel CSS -->
    <link rel="stylesheet" type="text/css" href="carousel/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="carousel/slick/slick-theme.css">

    <!-- Custom styles - according to pathname -->
    <link href="css/style.min.css" rel="stylesheet" />
    <!-- Custom styles - according to pathname -->
    <!-- JQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="js/mdb.min.js"></script>
    <!-- Slick Carousel JavaScript -->
    <script src="./carousel/slick/slick.js" type="text/javascript" charset="utf-8"></script>

    <!-- Custom JS according to pathname -->
    <script async type="text/javascript" src="js/custom.min.js"></script>
    <!-- Custom JS according to pathname -->

<?php } else { ?>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet" />
    <!-- Material Design Bootstrap -->
    <link href="../css/mdb.min.css" rel="stylesheet" />
    <!-- Slick Carousel CSS -->
    <link rel="stylesheet" type="text/css" href="../carousel/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="../carousel/slick/slick-theme.css">
    <!-- Your custom styles (optional) -->
    <link href="../css/style.min.css" rel="stylesheet" />

    <!-- JQuery -->
    <script type="text/javascript" src="../js/jquery-3.4.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="../js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="../js/mdb.min.js"></script>
    <!-- Slick Carousel JavaScript -->
    <script src="../carousel/slick/slick.js" type="text/javascript" charset="utf-8"></script>
    <!-- Custom JS -->
    <script async type="text/javascript" src="../js/custom.min.js"></script>

<?php } ?>

<!-- Custom Title according to pathname -->
<title>
    ד״ר טוני לביאד || דף הבית
</title>
<!-- Custom Title according to pathname -->