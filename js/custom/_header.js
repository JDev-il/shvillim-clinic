var getLinks = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        return callback(null, xhr.response);
      } else {
        return callback(status, xhr.response);
      }
    };
    return xhr.send();
};

var navDiv = document.getElementById("navHome"),
pathname = location.pathname.split("/")[location.pathname.split("/").length-1].split(".")[0],
url = location.pathname.indexOf("pages") < 0 ? "content/json/links.json" : "../content/json/links.json" ; 

// var ul = document.querySelector(".navbar-nav");
var ul = document.createElement("ul");
var li = document.createElement("li");
var a = document.createElement("a");




getLinks(url, function(err, data){
    if(err){
        return err;
    }
    // navDiv.innerHTML = 
    // `<div class="collapse navbar-collapse navBarJs">
    //   <ul class="navbar-nav" id="navbarNavUl">
    //   </ul>
    // </div>`


    //! COUNT HOW MANY PAGES NAVIGATION BAR HOLDS
    //! AND ADD AN ARRAY THAT WILL BE TRACKED BY INDEX BELOW

    Object.entries(data).forEach((element, index) => {
      document.getElementsByClassName(`navJs-${index}`).innerHTML = 
      `<div class="collapse navbar-collapse" id="navbarNav">      
         <ul class="navbar-nav">
          <li class="nav-item active" id="${index+1}">
            <a class="nav-link" href="./${element[1][pathname]}.html">${element[1][pathname]}</a>
          </li>

           <li class="dropdown" id="dropdownCat">
             <a class="nav-link">מאמרים מקצועיים</a>
             <div class="dropdown-menu">
               <a class="dropdown-item" href="./pages/psychology.html" id="3"
                 >פסיכולוגיה</a
               >
               <a class="dropdown-item" href="./pages/education.html" id="4"
                 >חינוך</a
               >
               <a class="dropdown-item" href="./pages/intelligence.html" id="5"
                 >אינטיליגנציה רגשית</a
               >
             </div>
           </li>
           <li class="dropdown" id="dropdownCat">
             <a class="nav-link">סוגי טיפולים</a>
             <div class="dropdown-menu">
               <a class="dropdown-item" href="./pages/panic.html" id="6"
                 >הפרעות חרדה</a
               >
               <a class="dropdown-item" href="./pages/emotion.html" id="7"
               >ויסות רגשי</a
               >
               <a class="dropdown-item" href="./pages/children.html" id="8"
               >טיפול בילדים ונוער<br/>והדרכות הורים</a
               >
               <a class="dropdown-item" href="./pages/adhd.html" id="9"
                 >הפרעת קשב וריכוז</a
               >
               <a class="dropdown-item" href="./pages/feedback.html" id="10"
                 >טיפול בביופידבק</a
               >
             </div>
           </li>
           <li class="nav-item" id="11">
             <a class="nav-link" href="./pages/contact.html">צור קשר</a>
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
       `
    });
})


// `<div class="collapse navbar-collapse" id="navbarNav">
//   <ul class="navbar-nav">
//     <li class="nav-item active" id="1">
//       <a class="nav-link" href="./home.html">דף הבית</a>
//     </li>
//     <li class="nav-item" id="2">
//       <a class="nav-link" href="./pages/tonylaviad.html">מי אני?</a>
//     </li>
//     <li class="dropdown" id="dropdownCat">
//       <a class="nav-link">מאמרים מקצועיים</a>
//       <div class="dropdown-menu">
//         <a class="dropdown-item" href="./pages/psychology.html" id="3"
//           >פסיכולוגיה</a
//         >
//         <a class="dropdown-item" href="./pages/education.html" id="4"
//           >חינוך</a
//         >
//         <a class="dropdown-item" href="./pages/intelligence.html" id="5"
//           >אינטיליגנציה רגשית</a
//         >
//       </div>
//     </li>
//     <li class="dropdown" id="dropdownCat">
//       <a class="nav-link">סוגי טיפולים</a>
//       <div class="dropdown-menu">
//         <a class="dropdown-item" href="./pages/panic.html" id="6"
//           >הפרעות חרדה</a
//         >
//         <a class="dropdown-item" href="./pages/emotion.html" id="7"
//         >ויסות רגשי</a
//         >
//         <a class="dropdown-item" href="./pages/children.html" id="8"
//         >טיפול בילדים ונוער<br/>והדרכות הורים</a
//         >
//         <a class="dropdown-item" href="./pages/adhd.html" id="9"
//           >הפרעת קשב וריכוז</a
//         >
//         <a class="dropdown-item" href="./pages/feedback.html" id="10"
//           >טיפול בביופידבק</a
//         >
//       </div>
//     </li>
//     <li class="nav-item" id="11">
//       <a class="nav-link" href="./pages/contact.html">צור קשר</a>
//     </li>
//   </ul>
// </div>
// <button
// class="navbar-toggler"
// type="button"
// data-toggle="collapse"
// data-target="#navbarNav"
// aria-controls="navbarNav"
// aria-expanded="false"
// aria-label="Toggle navigation"
// >
// <i class="fas fa-bars fa-1x"></i>
// </button>
// `





{/* <li class="nav-item active" id="1">
             <a class="nav-link" href="./home.html">דף הבית</a>
           </li>
           <li class="nav-item" id="2">
             <a class="nav-link" href="./pages/tonylaviad.html">מי אני?</a>
           </li> */}