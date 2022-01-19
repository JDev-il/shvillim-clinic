$(document).ready(function() {

  //?=============================================
          //** JSON Initial Call Paths **/          
  //?=============================================/

    var path = "https://shvillim.co.il/content"

    /* Outer Path
    -------------------------------------------------- */
    
      // * Treatment Carousel Data //
        const panic = `${path}/json/treatments/panic.json`;
        const emotion = `${path}/json/treatments/emotion.json`
        const children = `${path}/json/treatments/children.json`
        const adhd = `${path}/json/treatments/adhd.json`
        const feedback = `${path}/json/treatments/feedback.json`;

      //* Professional Articles //
        const intelligence = `${path}/json/articles/intelligence.json`;
        const psychology = `${path}/json/articles/psychology.json`;
        const education = `${path}/json/articles/education.json`;

      //* Treatment Articles //
        const panicarticle = `${path}/json/articles/panictreatment.json`;
        const emotionarticle = `${path}/json/articles/emotiontreatment.json`;
        const childrenarticle = `${path}/json/articles/childrentreatment.json`;
        const adhdarticle = `${path}/json/articles/adhdtreatment.json`;
        const feedbackarticle = `${path}/json/articles/feedbacktreatment.json`;

      //* Direction Call Carousel //
        const calls = `${path}/json/calldirections/calls.json`          
    
    /* End of Outer Path
    -------------------------------------------------- */    

  //?============  JSON Initial Call Paths  =============*/



  //?=============================================
              //** JSON Functions **/          
  //?=============================================/

  var getJsonTopics = function(){

    let 
    pathName = location.pathname,
    name = 
      pathName.includes("/pages") ? 
      pathName.split("/pages/")[1].split(".")[0] : 
      pathName.split("/")[pathName.split("/").length-1].split(".")[0];
      
    const 
    inteli = "inteli",
    psy = "psy",
    edu = "edu",
    panic = "panic",
    emotion = "emotion",
    child = "child",
    adhd = "adhd",
    feedback = "feedback"; 

    if(pathName.includes("/intelligence.html")){
      return [intelligence, name, inteli, inteli.charAt(0).toUpperCase() + inteli.slice(1)]
    }
    else if(pathName.includes("/psychology.html")){
      return [psychology, name, psy, psy.charAt(0).toUpperCase() + psy.slice(1)]
    }
    else if(pathName.includes("/education.html")){
      return [education, name, edu, edu.charAt(0).toUpperCase() + edu.slice(1)];
    }
    else if(pathName.includes("/panic.html")){
      return [panicarticle, name, panic, panic.charAt(0).toUpperCase() + panic.slice(1)];
    }
    else if(pathName.includes("/emotion.html")){
      return [emotionarticle, name, emotion, emotion.charAt(0).toUpperCase() + emotion.slice(1)];
    }
    else if(pathName.includes("/children.html")){
      return [childrenarticle, name, child, child.charAt(0).toUpperCase() + child.slice(1)];
    }
    else if(pathName.includes("/adhd.html")){
      return [adhdarticle, name, adhd, adhd.charAt(0).toUpperCase() + adhd.slice(1)];
    }
    else if(pathName.includes("/feedback.html")){
      return [feedbackarticle, name, feedback, feedback.charAt(0).toUpperCase() + feedback.slice(1)];
    }
    else {
      return name
    }

  }

//?============  JSON Functions  =============*/




  //?=============================================
         //** Treatments/Home Carousel **/          
  //?=============================================/

    var arr = []

    var jsonNamesStr = [
      "feedback", 
      "adhd", 
      "children", 
      "emotion", 
      "panic"
    ]
    var jsonNames = [
      feedback, 
      adhd, 
      children, 
      emotion,
      panic
    ]

    //* Home Page Carousel Mapper //
      jsonNames.forEach((r, i)=>{
          Promise.resolve($.getJSON(r, (items)=>{
            return items
          })).then((items)=>{
              if(items[0][0].idName === jsonNamesStr[i]) { 
              var returnItem;
              items[0][1].forEach((item=>{                        
                returnItem = item.description
                return returnItem
              }))
              $(".slider").append(`
              <div class="card ${items[0][0].id} ${items[0][0].idName}" id="${items[0][0].id}">              
                <div class="card-body">
                <h4 class="card-title">${items[0][0].title}</h4>
                <p class="card-text">
                ${returnItem}
                </p>
                ${items[0][0].href !== "#" ? 
                `<a class="btn btn-md carouselBtn" href=${items[0][0].href}>קרא עוד</a>` 
                : ''}
                </div>
              </div>
              `)
              }             
          }).then(()=>{
          var sliderLen = $('.slider').children('.card').length
          if(sliderLen == jsonNames.length){
            $('.slider').children('.card').each(function(i, card){      
              arr.push(i+1)
            })               
            $('.slider').slick({
              variableWidth: true,
            }); 
            }
          }).then(()=>{
            for (let index = 0; index < arr.length; index++) {
              $(this).find('.card-body p').css('display', 'none');
              $(this).find(".card .btn").css('display', 'none')
              $(this).find('.card-title').css('text-align', 'center', "margin-top", "10vh")
              .css("margin-top", "15vh");
            }
            
            arr.forEach(num=>{
              $(`.${num}`).mouseenter(function(){  
              $(this).find(".card-body p").css('display', 'block')
              $(this).find("h4").css('color', 'rgba(102, 122, 134, 0.218)')
              .css('transition', 'ease all .6s', '!important')
              .css('transform', 'scale(1)')
              $(this).find(".btn").css('display', 'block')
              $(this).find('.card-title').css("margin-top", "");
              })
            })
          
            arr.forEach(num=>{    
              $(`.${num}`).mouseleave(function(){
              $(this).find(".card-body p").css('display', 'none')
              $(this).find("h4").css('color', '')
              .css('transition', 'all .6s', '!important')
              .css('transform', 'scale(1.140)')
              $(this).find(".btn").css('display', 'none')
              $(this).find('.card-title').css("margin-top", "15vh");
              })
            })                
          }).catch(err=>{
            if(err) return err
          })
      })
    
  //?============  Treatments/Home Carousel  =============*/





  //?=============================================
            //** Arrow Scroll Button **/          
  //?=============================================/

    $(".btnScrollTop").on("click", function(){
      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 6);
        }
      };
      scrollToTop()
    })


    if (window.devicePixelRatio <= 2.200000047683715) {
      $(".btnScrollTop").css("line-height", "")    
      $(".btnScrollTop").css("line-height", "2.2rem", "important")
    }
    if (window.devicePixelRatio <= 2.200000047683717 && window.devicePixelRatio >= 2.200000047683716) {
      $(".btnScrollTop").css("line-height", "")    
      $(".btnScrollTop").css("line-height", "2rem", "important")
      $(".btnScrollTop").css("border-radius", "")
    }
    if (window.devicePixelRatio >= 2.200000047683718) {
      $(".btnScrollTop").css("line-height", "")    
      $(".btnScrollTop").css("line-height", "2.2rem", "important")
    }
    // if (window.devicePixelRatio >= 3) {
    //   $(".btnScrollTop").css("line-height", "2.2rem", "important")
    // }

  //?============  Arrow Scroll Button  =============*/





  //?=============================================
       //** Navbar Toggler (Humburger Menu) **/          
  //?=============================================/

    $(".navbar-toggler").on('click', function(){
      // var jumboTronClass = ["jumboTronPsychology", "jumboTronEducation", "jumboTronIntelligence"]
      if($(".navbar-toggler").attr("aria-expanded") == "false"){
      $(".navbar-toggler").css("-webkit-transform", "translateX(-40px)").css("transform", "translateX(-40px)").css("color", "rgb(255, 136, 132)", "!important");
      // $(".navBarCustom .navbar-collapse, .navBarIndex .navbar-collapse").css("transition", "all .5s", "!important")
      $(".navBarCustom:not(.fixed)").css("background", "linear-gradient(rgba(24, 24, 24, 0.150), rgba(46, 46, 46, 0.900))");
      $(".navBarIndex").css("background", "linear-gradient(rgba(24, 24, 24, 0.350), rgba(46, 46, 46, 0.850))");
      } else {
        $(".navBarCustom, .navBarIndex").css("background", "")
        // $(".navBarCustom .navbar-collapse, .navBarIndex .navbar-collapse").css("transition", "all .5s", "!important")
        $(".navbar-toggler").css("transform", "")
        // $(".navbar-toggler").css("margin-top", "24px", "!important")
        $(".navbar-toggler").css("color", "")
      }
    }) 

  //?============  Navbar Toggler (Humburger Menu)  =============*/



  //?=============================================
      //** Pages & Navbar Initial Rendering **/          
  //?=============================================/

  var pagesNames = [
    "intelligence", "psychology", 
    "education", "tonyPage", 
    "panic", "emotion", 
    "children", "adhd", 
    "feedback"
  ]

  //* FadeIn Effect //
  
    for (let i = 0; i <= pagesNames.length; i++) {
      setTimeout(() => {
        $(`#${pagesNames[i]}`).fadeIn(450, function() {
          $(`#${pagesNames[i]}`).css("display", "block");
        });
      }, 100);        
    }


  //* Pages Navbar & ".active" Class Settings //

    for (let i = 1; i <=pagesNames.length + 1; i++) {
      if ($(`#${i}`).hasClass("active")) {
        $(`#${i}`).css("box-shadow", "0 2px 5px 0 rgba(0,0,0,.16)", "0 2px 10px 0 rgba(0,0,0,.12)");  
        $(`.navBarCustom #${i}`).css("color", "rgb(54, 73, 84)", "!important");
        $(`.navBarCustom #${i}`).css("background-color","rgba(255, 235, 205)", "!important");
      }
    }

    if($("#dropdownCat").hasClass("active")) {
      $("#dropdownCat").css("box-shadow", "0 2px 5px 0 rgba(0,0,0,.16)", "0 2px 10px 0 rgba(0,0,0,.12)");
    }
    
    $(".dropdown-menu").children('a').each(function(a, tag){
      if(tag.getAttribute("href") == null){
        tag.setAttribute("disabled", "disabled")
        $(tag).css("background", "transparent")
      }   
    });

//?============  Pages & Navbar Initial Rendering  =============*/


  

  //?=============================================
              //** Tony Laviad Page **/          
  //?=============================================/

    $("#tonyIconsSection p").each(function(i){
      var pTag = document.children[0].children[1].children[2].children[4].children[i]
      pTag.setAttribute("id", i)    
    })

          function galleryRender() {
            if($(".desktopGallery")[0] == undefined || $(".desktopGallery")[0] == ''){
            } else {
            var gallery = $(".desktopGallery")[0].children
            for (let index = 0; index < gallery.length; index++) {
              if(gallery[index].childNodes[1] !== undefined){
                let imageId = gallery[index].childNodes[1].id
                $(`#${imageId}`).on("click", function(e){
                  $(".modal-body").html(`<img src='${e.target.attributes.src.nodeValue}'/>`); 
                })
              }
            }  
            $(window).resize(function() {
              var width = $(window).width();
              if(width <= 768){
                $("#imagePopUp").modal("hide")
                setTimeout(() => {
                  $('.modal-body img').remove()             
                }, 400);
              }
            });
            }
          }
          galleryRender()

 
  //?============  Tony Laviad Page  =============*/





  //?=============================================
        //** Window Scroll Navbar Effects **/          
  //?=============================================/

    $(".animate").css("display", "none") 

    $(window).on("scroll", function(e) {
      var scroll = $(window).scrollTop();    
      if(scroll < 500){
        $(".animate").fadeOut(200)
      } else {
        if( scroll > 600){
          $(".animate").fadeIn(500)
        }
      }
      if (scroll > 0.1) {
          $(".navBarCustom").removeClass("navbar-dark")
          .addClass("navbar-light fixed")
          .css("background", "")
          // $(".navBarCustom").css("background-color","rgb(255, 235, 205)");
          // $(".navBarCustom li").css("color", "rgb(102, 122, 134)");
          // $(".navBarCustom a").css("color", "rgb(102, 122, 134)");
          // $(".dropdown-menu").css("background-color","rgb(102, 122, 134)");
          // $(".dropdown-item").css("color", "rgb(255, 235, 205)", "!important");
      } else {
        if($(".navbar-toggler").attr("aria-expanded") == "false"){
            $(".navBarCustom").css("background", "")
          } else {
            $(".navBarCustom").css("background", "linear-gradient(rgba(24, 24, 24, 0.221), rgba(46, 46, 46, 0.817))")
          }
          $(".navBarCustom").addClass("navbar-dark");
          $(".navBarCustom").removeClass("navbar-light fixed");
          // $(".navBarCustom a").css("color", "#fffffa", "!important");
          // $(".dropdown-menu").css("background-color", "rgb(255, 235, 205)", "!important");
          // $(".dropdown-item").css("color", "rgb(102, 122, 134)", "!important");
      }
    });

  //?============  Window Scroll Navbar Effects  =============*/





  //?=============================================
                //** Articles **/          
  //?=============================================/

    //* Professional //

      const articlesPath = getJsonTopics()
      if(articlesPath === "home"){
        return articlesPath;
      } 
      $.getJSON(articlesPath[0], function(article) {
        article.forEach(e => {
          $(`#${articlesPath[1]}`).append(`
          <div class="singleArticle" id="${articlesPath[2]}${e.art}">
          <h3><u>${e.title}</u></h3>
          <p>
          ${e.intro}
          </p>
          <div class="collapse" id="collapse${articlesPath[1]===articlesPath[2] ? articlesPath[2] : articlesPath[3]}${e.art}">
            <div class="mt-3">
              <p>${e.body}</p>
            </div>
          </div>
          <button
            type="button"
            class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
            data-toggle="collapse"
            href="#collapse${articlesPath[3]}${e.art}"
            aria-expanded="false"
            aria-controls="collapse${e.art}"
            id="${articlesPath[1]}Btn${e.art}"
          >
            להמשך קריאה
          </button>
        </div>`);

          if (window.devicePixelRatio <= 2.200000047683716) {
            $(`#${articlesPath[1]}Btn` + `${e.art}`)
              .removeClass("btn-md")
              .addClass("btn-lg");
          }          

          // if (window.devicePixelRatio > 2.200000047683716) {
          //   $("#psyBtn" + `${e.art}`)
          //     .removeClass("btn-md")
          //     .addClass("btn-sm");
          // }
          
          if(article.length <= 1){
            $(`#collapse${articlesPath[2]}${e.art}`).removeClass("collapse")
            $(`#${articlesPath[1]}Btn${e.art}`).remove();
          }
          $(`#${articlesPath[1]}Btn${e.art}`).click(function() {
            if ($(`#${articlesPath[1]}Btn${e.art}:contains("להמשך קריאה")`)[0]) {
              $(`#${articlesPath[1]}Btn${e.art}`)
              .text("סגור")
              .css("background", "rgb(255, 136, 132)")
              .css("color", "rgb(255, 235, 205)")
              .mouseup(function(){
                $(this).blur();
              });
              $(`#${articlesPath[2]}${e.art}`)
                .siblings()
                .find("h3, p")
                .css("color", "rgb(102, 122, 134, .15)");          
                $(`#${articlesPath[2]}${e.art}`)
                .siblings()
                .find("button")
                .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
            } else {
              if ($(`#${articlesPath[1]}Btn${e.art}:contains("סגור")`)[0]) {
                $(`#${articlesPath[1]}Btn${e.art}`)
                .text("להמשך קריאה")
                .css("background", "").css("color", "");
                $(`#${articlesPath[2]}${e.art}`)
                  .siblings()
                  .find("h3, p")
                  .css("color", "rgb(54, 73, 84)");
                $(`#${articlesPath[2]}${e.art}`)
                  .siblings()
                  .find("button")
                  .removeAttr("disabled", "disabled")
                  .css("background", "").css("box-shadow", "");
              }
            }
          });
        });
      });



  //?============  Articles  =============*/





  //?=============================================
              //** Direction Calls **/          
  //?=============================================/
  
    //* Initial First Append //

      $.getJSON(calls, function(call, i){
        var firstRandom = call.splice(Math.floor(Math.random() * (10)), 1)[0];  
        $("#directionCallCarousel").append(`
        <div class="carousel-item active directionText">
          <p class="text-center">
            <em>"${firstRandom.body}"</em>
          </p>
        </div>
        `)
      })


    //* Dynamic Append //

      $.getJSON(calls, function(call){
        var newArr = []  
        call.forEach((e, i)=>{
          var random = call.splice(Math.floor(Math.random() * (10)), 1)[0];
          newArr.push(random)          
          $("#directionCallCarousel").append(`
          <div class="carousel-item directionText">
          <p class="text-center">
            <em>"${newArr[i].body}"</em>
          </p>
        </div>
          `)
        })
      })

  //?============  Direction Calls  =============*/




  //?=============================================
              //** Footer Settings **/          
  //?=============================================/

    $(".triggerFooter").css("display", "none")
    
    setTimeout(() => {
        $(".triggerFooter").css("display", "block")
        $(".triggerFooter").css("display", "block")
    }, 100);

  //?============  Footer Settings  =============*/





  //?=============================================
        //** Contact / Confirm Page (PHP) **/          
  //?=============================================/  
  
    var name;
    var phone;
    var email;

    $("#submitForm").attr("disabled", "disabled")
    
    $("#name").on('input', function(){
      var input=$(this);
      var is_name = input.val();
      var reg = /[א-ת]\s([א-ת])/
      var is_reg = reg.test(input.val())              
      if(is_name.length > 3 && is_reg){
        name = true    
        input.removeClass("invalid").addClass("valid");
      } else {
        name = false
        input.removeClass("valid");
      }
      if(is_name.length == 0){
        input.removeClass("valid").addClass("invalid");
      }
    })
    $('#phone').on('input', function(){
      var input=$(this);
      var re = /^0(5[0123456789]|6[47]){1}(\-)?[^0\D]{2}\d{5}$/;
      var is_phone = re.test(input.val());
      if(is_phone){ 
        phone = true
        input.removeClass("invalid").addClass("valid");
      } else{
        phone = false
        input.removeClass("valid")
      }
    });
    $('#email').on('input', function(){
      var input=$(this);
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var is_email = re.test(input.val());
      if(is_email){
        email = true
        input.removeClass("invalid").addClass("valid");
      } else{
        email = false
        input.removeClass("valid");
      }
    });
      
    $("#contactForm").keyup(function(){
      if(name && phone && email){
        $("#submitForm").removeAttr("disabled")
      } else if(!name || !phone || !email){
        $("#submitForm").attr("disabled", "disabled")
      }
    })
      
  //?============  Confirm Page (PHP)  =============*/





});
