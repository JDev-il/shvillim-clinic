$(document).ready(function(){
  var isNavRendered = false;
  var pathname = location.pathname
    .split("/")
    [location.pathname.split("/").length - 1].split(".")[0];
  var url =
    location.pathname.indexOf("pages") < 0
      ? "content/json/links.json"
      : "../content/json/links.json";
  
  var pathName = location.pathname;
  var currentPathName = pathName.includes("/pages")
    ? pathName.split("/pages/")[1].split(".")[0]
    : pathName.split("/")[pathName.split("/").length - 1].split(".")[0];
  
  var getLinks = async function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = async function () {
      var status = xhr.status;
      if (status === 200) {
        return await callback(null, xhr.response);
      } else {
        return await callback(status, xhr.response);
      }
    };
    return xhr.send();
  };
  
  getLinks(url, function (err, data) {
    if (err) {
      return err;
    }
  
    let dataLength = data.pages.length;
  
    for (let index = 1; index < dataLength; index++) {
      document.getElementById(
        "navJs"
      ).innerHTML = 
          `<div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" id="li1">
                <a class="nav-link" href="/home.html">דף הבית</a>
              </li>
              <li class="nav-item" id="li2">
                <a class="nav-link" href="../pages/tonylaviad.html">אודות</a>
              </li>
              <li class="dropdown" id="dropdownCatArt">
                <a class="nav-link" id="articlesDropdown">מאמרים מקצועיים</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="../pages/psychology.html" id="li3"
                    >פסיכולוגיה</a
                  >
                  <a class="dropdown-item" href="../pages/education.html" id="li4"
                    >חינוך</a
                  >
                  <a class="dropdown-item" href="../pages/intelligence.html" id="li5"
                    >אינטיליגנציה רגשית</a
                  >
                </div>
            </li>
            <li class="dropdown" id="dropdownCatTreat">
              <a class="nav-link" id="treatmentsDropdown">סוגי טיפולים</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="../pages/panic.html" id="li6"
                  >הפרעות חרדה</a
                >
                <a class="dropdown-item" href="../pages/emotion.html" id="li7"
                >ויסות רגשי</a
                >
                <a class="dropdown-item" href="../pages/children.html" id="li8"
                >טיפול בילדים ונוער<br/>והדרכות הורים</a
                >
                <a class="dropdown-item" href="../pages/adhd.html" id="li9"
                  >הפרעת קשב וריכוז</a
                >
                <a class="dropdown-item" href="../pages/feedback.html" id="li10"
                  >טיפול בביופידבק</a
                >
              </div>
            </li>
            <li class="nav-item" id="li11">
              <a class="nav-link" href="/contact.html">צור קשר</a>
            </li>
          </ul>
        </div>
        <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <i class="fas fa-bars fa-1x"></i>
        </button>    
      `;
    }

    isNavRendered = true;
    if (isNavRendered) {

      switch (currentPathName) {
        
        case "home" || "index":
          $('#li1')
          .addClass("active");
          return;
  
        case "tonylaviad":
          $('#li2')
          .addClass("active");
          return;
  
        //& ==== DROPDOWNS ==== //
            //Articles//
            case "psychology":
              $('#articlesDropdown').addClass("active");
              $('#li3')
              .css("background-color","rgba(255, 235, 205)", "!important;")
              .addClass("active");
              $("#dropdownCatArt").addClass("active")
              return;

            case "education":
              $('#articlesDropdown').addClass("active");
              $('#li4')
              .css("background-color","rgba(255, 235, 205)", "!important;")
              .addClass("active");
              $("#dropdownCatArt").addClass("active")
              return;

            case "intelligence":
              $('#articlesDropdown').addClass("active");
              $('#li5')
              .css("background-color","rgba(255, 235, 205)", "!important;")
              .addClass("active");
              $("#dropdownCatArt").addClass("active")
              return;

            
            //Treatments//
            case "panic":
              $('#treatmentsDropdown').addClass("active");
              $('#li6')
              .css("background-color","rgba(255, 235, 205)", "!important;")
              .addClass("active");
              $("#dropdownCatTreat").addClass("active")
              return;

            case "emotion":
              $('#treatmentsDropdown').addClass("active");
              $('#li7')
              .css("background-color","rgba(255, 235, 205)", "!important;")
              .addClass("active");
              $("#dropdownCatTreat").addClass("active")
              return;

            case "children":
              $('#treatmentsDropdown').addClass("active");
              $('#li8')
              .css("background-color","rgba(255, 235, 205)", "!important;")
              .addClass("active");
              $("#dropdownCatTreat").addClass("active")
              return;

            case "adhd":
              $('#treatmentsDropdown').addClass("active");
              $('#li9')
              .css("background-color","rgba(255, 235, 205)", "!important;")
              .addClass("active");
              $("#dropdownCatTreat").addClass("active")
              return;

            case "feedback":
              $('#treatmentsDropdown').addClass("active");
              $('#li10')
              .css("background-color","rgba(255, 235, 205)", "!important;")
              .addClass("active");
              $("#dropdownCatTreat").addClass("active")
              return;
        //& ==== DROPDOWNS ==== //
      
        case "contact":
          $('#li11')
          .addClass("active");
          return;
      } 
    }
  });

})

