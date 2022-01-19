<?php
require_once "functions.php";

    $initPath = "$_SERVER[REQUEST_URI]";
    $explodePathname = explode("/", $initPath);
    $pathName = explode(".", end($explodePathname))[0];
    $homePath = ($pathName === 'home');
    
?>

<nav class="navbar navbar-expand-md navbar-dark px-1" id="<?= $homePath ? 'navHome' : '' ?>">
    <a class="navbar-brand" href="<?= $homePath ? './home.php' : '../home.php' ?>"><?= $homePath ? 'דף הבית' : 'שבילים' ?></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars fa-1x"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item <?= $pathName === 'home' ? 'active' : '' ?>" id="1">
                <a class="nav-link <?= $active ?>" href="<?= $homePath ? './home.php' : '../home.php' ?>">דף הבית</a>
            </li>
            <li class="nav-item <?= $pathName === 'tonylaviad' ? 'active' : '' ?>" id="2">
                <a class="nav-link" href="<?= $homePath ? './pages/tonylaviad.php' : '../pages/tonylaviad.php' ?>">ד״ר טוני לביאד</a>
            </li>
            <li class="dropdown" id="dropdownCat">
                <a class="nav-link">מאמרים מקצועיים</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item <?= $pathName === 'psychology' ? 'active' : '' ?>" href="<?= $homePath ? './pages/psychology.php' : '../pages/psychology.php' ?>" id="3">פסיכולוגיה</a>
                    <a class="dropdown-item <?= $pathName === 'education' ? 'active' : '' ?>" href="<?= $homePath ? './pages/education.php' : '../pages/education.php' ?>" id="4">חינוך</a>
                    <a class="dropdown-item <?= $pathName === 'intelligence' ? 'active' : '' ?>" href="<?= $homePath ? './pages/intelligence.php' : '../pages/intelligence.php' ?>" id="5">אינטיליגנציה רגשית</a>
                </div>
            </li>
            <li class="dropdown" id="dropdownCat">
                <a class="nav-link">סוגי טיפולים</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item <?= $pathName === 'panic' ? 'active' : '' ?>" href="<?= $homePath ? './pages/panic.php' : '../pages/panic.php' ?>" id=" 6">הפרעות חרדה</a>
                    <a class="dropdown-item <?= $pathName === 'emotion' ? 'active' : '' ?>" href="<?= $homePath ? './pages/emotion.php' :  '../pages/emotion.php' ?>" id="7">ויסות רגשי</a>
                    <a class="dropdown-item <?= $pathName === 'children' ? 'active' : '' ?>" href="<?= $homePath ? './pages/children.php' : '../pages/children.php' ?>" id="8">טיפול בילדים ונוער<br />והדרכות הורים</a>
                    <a class="dropdown-item <?= $pathName === 'adhd' ? 'active' : '' ?>" href="<?= $homePath ? './pages/adhd.php' : '../pages/adhd.php' ?>" id="9">הפרעת קשב וריכוז</a>
                    <a class="dropdown-item <?= $pathName === 'feedback' ? 'active' : '' ?>" href="<?= $homePath ? './pages/feedback.php' : '../pages/feedback.php' ?>" id="10">טיפול בביופידבק</a>
                </div>
            </li>
            <li class="nav-item <?= $pathName === 'contact' ? 'active' : '' ?>" id="11">
                <a class="nav-link" href="<?= $homePath ? './pages/contact.php' : '../pages/contact.php' ?>">צור קשר</a>
            </li>
        </ul>
    </div>
</nav>