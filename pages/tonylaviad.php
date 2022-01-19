<!DOCTYPE html>
<html lang="he">

<head>
  <?php include_once "./components/head.php"; ?>
</head>

<body>
  <?php include_once "./components/nav.php"; ?>

  <div class="jumbotron jumbotron-fluid jumboTronTony z-depth-0" title="Photo by Oliver Brown on Unsplash" alt="Photo by Oliver Brown on Unsplash">
    <h1>ד"ר טוני לביאד</h1>
  </div>
  <div class="container" id="tonyPage">
    <img class="img-thumbnail float-left hoverable mr-2 mb-2" alt="ד'ר טוני לביאד" title="ד'ר טוני לביאד" src="../img/mazal_photo.jpg" id="tonyLaviad" />
    <p>
      ד״ר טוני לביאד, פסיכותרפיסטית, מטפלת קוגנטיבית התנהגותית CBT, לילדים נוער ומבוגרים.
    </p>
    <p>
      במסגרת לימודי הדוקטורט (PHD) בהצטיינות בחינוך ופסיכולוגיה, פיתחתי מודל לשיפור הוויסות רגשי (Emotional Regulation). מודל זה משלב כלים ומיומנויות מהגישה הפסיכולוגית הקוגניטיבית התנהגותית-CBT.
    </p>
    <div class="col-md-3">
      <hr />
    </div>
    <div id="tonyIconsSection">
      <p><i class="fas fa-user-graduate"></i> B.A בפסיכולוגיה, M.A בחינוך בהצטיינות</p>
      <p><i class="fas fa-user-graduate"></i> פסיכותרפיה קוגניטיבית התנהגותית – CBT "בר אילן" ו"תל השומר"</p>
      <p><i class="fas fa-award"></i> מרכז רפואי לבריאות הנפש ״לב השרון״ מרפאת חוץ מבוגרים, יחידת CBT</p>
      <p><i class="fas fa-award"></i> מרכז רפואי ״שניידר״ לרפואת ילדים, המחלקה לרפואה פסיכולוגית, המרפאה להדרכת הורים</p>
      <p><i class="fas fa-user-graduate"></i> טיפול בביופידבק - אוניברסיטת "בר אילן"</p>
      <p><i class="fas fa-user-graduate"></i> מוסמכת לטיפול במיינדפולנס (Mindfulness) לילדים</p>
      <p><i class="fas fa-user-graduate"></i> טיפול משפחתי – מרכז הכשרה SATIR, ישראל</p>
      <p><i class="fas fa-user-graduate"></i> אימון קוגניטיבי התנהגותי, הפרעת קשב וריכוז – PCIL</p>
      <p><i class="fas fa-chalkboard-teacher"></i> מפתחת תכנית התערבות לויסות רגשי "גשר לרגש" - <a href='https://apps.education.gov.il/tyhnet/public/#/tochniyot?q=8860&id=8860'>התוכנית מאושרת במשרד החינוך מס׳ 8860</a></p>
      <p><i class="fas fa-chalkboard-teacher"></i> מחברת ספר ילדים ״הרגשות יצאו לרקוד״ - לפיתוח מודעות רגשית</p>
      <p><i class="fas fa-chalkboard-teacher"></i> מרצה בכנסים בינלאומיים בנושא: ויסות רגשי Emotional Regulation</p>
      <p><i class="fas fa-chalkboard-teacher"></i> מפתחת ״הדרכת הורים ומורים בגישת הסמכות החדשה״ - <a href='https://apps.education.gov.il/tyhnet/public/#/tochniyot?q=9461&id=9461'>התוכנית מאושרת במשרד החינוך מס׳ 9461</a></p>
    </div>
  </div>

  <!--MODAL-->
  <div class="modal fade bottom" data-keyboard="false" data-backdrop="static" id="imagePopUp" tabindex="-1" role="dialog" aria-labelledby="clinicImages" aria-hidden="true">
    <div class="modal-dialog modal-full-height modal-top" role="document" id="imageModal">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" id="modalClosingBtn1" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-secondary" id="modalClosingBtn2" data-dismiss="modal">סגור</button>
        </div>
      </div>
    </div>
  </div>
  <!--MODAL-->

  <div class="desktopGallery">
    <div class="imgDiv">
      <a data-toggle="modal" data-target="#imagePopUp" id="image-1">
        <img title='קליניקה שבילים' src="../img/clinic/IMG_5546.jpg" class="img-fluid">
      </a>
    </div>
    <div class="imgDiv">
      <a data-toggle="modal" data-target="#imagePopUp" id="image-2">
        <img title='קליניקה שבילים' src="../img/clinic/IMG_5547.jpg" class="img-fluid">
      </a>
    </div>
    <div class="imgDiv">
      <a data-toggle="modal" data-target="#imagePopUp" id="image-3">
        <img title='קליניקה שבילים' src="../img/clinic/IMG_5554.jpg" class="img-fluid">
      </a>
    </div>
    <div class="imgDiv">
      <a data-toggle="modal" data-target="#imagePopUp" id="image-4">
        <img title='קליניקה שבילים' src="../img/clinic/IMG_5557.jpg" class="img-fluid">
      </a>
    </div>
  </div>


  <!--* Mobile Only -->
  <div class="mobileGallery">
    <div id="clinicCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="img-fluid" src="../img/clinic/IMG_5546.jpg" title='קליניקה שבילים'>
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="../img/clinic/IMG_5547.jpg" title='קליניקה שבילים'>
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="../img/clinic/IMG_5554.jpg" title='קליניקה שבילים'>
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="../img/clinic/IMG_5557.jpg" title='קליניקה שבילים'>
        </div>
      </div>
      <a class="carousel-control-prev" href="#clinicCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#clinicCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  </div>
  <!--* Mobile Only -->



  <footer class="triggerFooter">
    <?php require_once './components/footer.php' ?>
  </footer>
</body>

</html>