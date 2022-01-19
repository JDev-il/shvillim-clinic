<!DOCTYPE html>
<html lang="he">

<head>
  <?php include_once "./pages/components/head.php"; ?>
</head>

<body>
  <?php include_once "./pages/components/nav.php"?>


  <!--=====================================
    =             Home Page Contnet       =
    ======================================-->
  <div class="jumbotron jumbotron-fluid jumboTronHead z-depth-0" title="Photo by Patrick Tomasso on Unsplash" alt="Photo by Patrick Tomasso on Unsplash">
    <h1>ד״ר טוני לביאד</h1>
    <h4>״שבילים״ - קליניקה לטיפול קוגניטיבי התנהגותי לילדים ומבוגרים</h4>
    <!-- <p class="picSignature">Photo by Patrick Tomasso on Unsplash</p> -->
  </div>


  <div class="container col-md-8 mainDivToColor">
    <h3>"אני מאמין" <span>| ד"ר טוני לביאד</span></h3>
    <div class="row shvillimIntro">
      <div class="col-md-6 mx-auto">
        <p>
          אני מאמינה כי הטיפול הינו מסע אישי ממנו אפשר לצמוח ולשפר את איכות החיים. בטיפול נרקמים יחסי אמון בין המטפל למטופל המאפשרים תהליכי ריפוי והחלמה לקשיים של המטופל.
        </p>
        <p>
          אני מאמינה כי הקשר הטיפולי והמרחב הטיפולי מהווים עבור המטופל מקום בו הוא חש בטוח בסביבה אשר מספקת לו תחושת בטחון ורצון להקשיב. המרחב הזה נדרש לו לצורך העמקה והתבוננות ללא ביקורתיות וללא שיפוטיות והוא מהווה בסיס לרכישת כלים להתמודדות וליצירת שינויים עבורו.
        </p>
        <p>
          הקשר הטיפולי נכון לכל גיל והוא כלי משמעותי בטיפול, אני מאמינה שיש בי את הידע, הרגישות והאהבה לטיפול המקצועי בקליניקה.
        </p>
      </div>
      <div class="col-md-6 mx-auto">
        <p>
          אני מאמינה שהחיים הם מסע ארוך של תהליך למידה, בכל עת אנו לומדים ובכל עת אנו מהווים עבור האחר מקור ללמידה. לקליניקה שלי בחרתי את השם "שבילים" כי אני מאמינה שאדם נע משביל לשביל ויוצר את שבילי חייו.
        </p>
        <p>
          השפה הטיפולית שלי כפסיכותרפיסטית בקליניקה היא CBT טיפול קוגנטיבי התנהגותי המותאם למטופל בפרוטוקול טיפולי על בסיס דיאגנוסטיקה המשגה המדויקת לו. <br />לצד גישה פסיכולוגית זו, אני משלבת במידת הצורך גם טיפול בביופידבק, טיפול באומנויות וביצירה, אימון קוגנטיבי התנהגותי, תרגול "מיינדפולנס" ועוד - כאשר כל אחד מאלו משלים את ה-CBT.
        </p>
        <p>
          כמו כן, אני מרצה בנושאים בפסיכולוגיה וחינוך ומנחה סדנאות בארגונים ובפורומים שונים.
        </p>
      </div>
    </div>
  </div>

  <div class="treatmentTypesSection">
    <h3><span>תחומי הטיפול בקליניקה:</span></h3>
    <div class="slider variableWidth" dir="rtl">
      <!--From JS-->
    </div>
  </div>

  <!-- קריאת כיוון -->
  <div class="directionCallBackground">
    <div class="mx-auto directionCallCarousel">
      <h4 class="text-center">קריאת כיוון</h4>
      <div class="col-md-4 mx-auto">
      </div>
      <div id="directionCall" class="directionCall carousel slide col-md-6 col-lg-8 col-sm-6 mx-auto" data-ride="carousel">
        <div class="carousel-inner" id="directionCallCarousel">
          <!-- FROM JS -->
        </div>
        <a class="carousel-control-next" href="#directionCall" role="button" data-slide="next">
          <span><i class="fas fa-chevron-right"></i></span>
        </a>
        <a class="carousel-control-prev" href="#directionCall" role="button" data-slide="prev">
          <span><i class="fas fa-chevron-left"></i></span>
        </a>
      </div>
    </div>
  </div>
  <!-- קריאת כיוון -->


  <!--=======  End of Home Page  ========-->


  <footer class="triggerFooter">
    <?php require_once './pages/components/footer.php' ?>
  </footer>
</body>

</html>