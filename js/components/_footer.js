var changedPath = !location.pathname.includes("index.html") || !location.pathname.includes("contact.html") ? '../pages/' : './'

document.getElementsByClassName('triggerFooter')[0].innerHTML = `<div class="container text-center text-md-right">
  <div class="row rowFooter">
    <div class="col-md-3 mx-auto">
      <ul class="">
        <li class="">
          <a class="" href="/index.html">
            דף הבית
          </a>
        </li>
      </ul>
      <ul>
        <li class="tonyLi">
          <a class="" href="${changedPath}tonylaviad.html">
            ד׳׳ר טוני לביאד
          </a>
        </li>
      </ul>
      <ul class="">
        <li class="">
          <a class="" href="${changedPath}privacy.html">
             פרטיות
          </a>
        </li>
      </ul>
    </div>
    <div class="col-md-3 mx-auto">
      <ul class="">
        <li class="">
          <a class="" href="${changedPath}terms.html">
            תנאי שימוש
          </a>
        </li>
      </ul>
      <ul class="">
        <li class="">
          <a class="" href="/contact.html">
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
    <br/>
  <img class="sslBadge" title="RapidSSl Certificated" src="content/media/RapidSSL_SEAL-90x50.gif"/>
  </div>
  </div>`;