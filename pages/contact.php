<!DOCTYPE html>
<html lang="he">

<head>
  <?php include_once "./components/head.php"; ?>
</head>

<body>
  <?php include_once "./components/nav.php"; ?>

  <div class="jumbotron jumbotron-fluid z-depth-0" id="contactMe">
    <h1 class="jumboTitle1">צור קשר</h1>
  </div>
  <div class="container col-md-6 py-2 contactPage">
    <div class="col-auto">
      <h4 class="text-center">השאירו פרטים ואחזור אליכם:</h4>

      <form class="md-form form-group" method="POST" id="contactForm" action="../confirm.php">
        <div class="form-group" name="contact_me">
          <label for="name">שם מלא<i class="fa fa-user fasInput px-2"></i></label>
          <input type="text" class="form-control" id="name" name="name" required oninvalid="setCustomValidity('אנא הקלד את שמך המלא בעברית')" />
        </div>
        <div class="form-group">
          <label for="phone">טלפון<i class="fa fa-phone fasInput px-2"></i></label>
          <input type="number" maxlength="10" class="form-control" id="phone" name="phone" required />
        </div>
        <div class="form-group">
          <label for="email">אימייל<i class="fas fa-envelope fasInput px-2"></i></label>
          <input type="email" class="form-control" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="comments">הערות<i class="fas fa-comment px-2"></i></label>
          <input class="form-control" type="text" id="comments" name="comments" />
        </div>
        <div class="form-group">
          <button type="submit" name="submit" class="btn waves-effect waves-light btn-md mt-3" id="submitForm">שלח</button>
        </div>
      </form>
    </div>
  </div>
  <div class="container col-md-8">
    <hr>
  </div>
  <div class="container text-center mt-5 contactPage">
    <h4>התקשרו או שלחו מייל:</h4>
    <p>
      מייל: <a href="mailto:clinic@shvillim.co.il?subject=קליניקה ''שבילים'' | ד''ר טוני לביאד - יצירת קשר">
        clinic@shvillim.co.il</a>
      <br />
      טלפון: <a href="tel:+972-50-6883882">050-6883882</a>
    </p>
  </div>


  <footer class="triggerFooter">
    <div class="container text-center text-md-right">
      <div class="row rowFooter">
        <div class="col-md-3 mx-auto">
          <ul class="">
            <li class="">
              <a class="" href="../home.html">
                דף הבית
              </a>
            </li>
          </ul>
          <ul>
            <li class="tonyLi">
              <a class="" href="./tonylaviad.html">
                ד׳׳ר טוני לביאד
              </a>
            </li>
          </ul>
          <ul class="">
            <li class="">
              <a class="" href="./privacy.html">
                פרטיות
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 mx-auto">
          <ul class="">
            <li class="">
              <a class="" href="./terms.html">
                תנאי שימוש
              </a>
            </li>
          </ul>
          <ul class="">
            <li class="">
              <a class="" href="./contact.html">
                צור קשר
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="justify-content-center tonyRights">
        <p>
          © כל הזכויות שמורות לד"ר טוני לביאד | מכון "שבילים"
        </p>
        <span>עיצוב ופיתוח: WeWebs</span>
        <br />
        <img class="sslBadge" title="RapidSSl Certificated" src="../content/media/RapidSSL_SEAL-90x50.gif" />
      </div>
    </div>
  </footer>
</body>

</html>