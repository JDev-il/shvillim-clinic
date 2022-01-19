    //   $.getJSON(psychology, function(psy) {
    //     psy.forEach(e => {
    //       $("#psychology").append(`
    //       <div class="singleArticle" id="psy${e.art}">
    //       <h3><u>${e.title}</u></h3>
    //       <p>
    //       ${e.intro}
    //       </p>
    //       <div class="collapse" id="collapsePsy${e.art}">
    //         <div class="mt-3">
    //           <p> 
    //           ${e.body}
    //           </p>
    //         </div>
    //       </div>
    //       <button
    //         type="button"
    //         class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
    //         data-toggle="collapse"
    //         href="#collapsePsy${e.art}"
    //         aria-expanded="false"
    //         aria-controls="collapse${e.art}"
    //         id="psyBtn${e.art}"
    //       >
    //         להמשך קריאה
    //       </button>
    //     </div>`);

    //       if (window.devicePixelRatio <= 2.200000047683716) {
    //         $("#psyBtn" + `${e.art}`)
    //           .removeClass("btn-md")
    //           .addClass("btn-lg");
    //       }          

    //       // if (window.devicePixelRatio > 2.200000047683716) {
    //       //   $("#psyBtn" + `${e.art}`)
    //       //     .removeClass("btn-md")
    //       //     .addClass("btn-sm");
    //       // }

    //       if(psy.length <= 1){
    //         $("#collapsePsy" + `${e.art}`).removeClass("collapse")
    //         $("#psyBtn" + `${e.art}`).remove();
    //       }
    //       $("#psyBtn" + `${e.art}`).click(function() {
    //         if ($("#psyBtn" + `${e.art}` + ':contains("להמשך קריאה")')[0]) {
    //           $("#psyBtn" + `${e.art}`).text("סגור").css("background", "rgb(255, 136, 132)").css("color", "rgb(255, 235, 205)")
    //           .mouseup(function(){
    //             $(this).blur();
    //         })
    //           $("#psy" + `${e.art}`)
    //             .siblings()
    //             .find("h3, p")
    //             .css("color", "rgb(102, 122, 134, .15)");          
    //             $("#psy" + `${e.art}`)
    //             .siblings()
    //             .find("button")
    //             .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
    //         } else {
    //           if ($("#psyBtn" + `${e.art}` + ':contains("סגור")')[0]) {
    //             $("#psyBtn" + `${e.art}`).text("להמשך קריאה");
    //             $("#psyBtn" + `${e.art}`).css("background", "").css("color", "");
    //             $("#psy" + `${e.art}`)
    //               .siblings()
    //               .find("h3, p")
    //               .css("color", "rgb(54, 73, 84)");
    //             $("#psy" + `${e.art}`)
    //               .siblings()
    //               .find("button")
    //               .removeAttr("disabled", "disabled")
    //               .css("background", "").css("box-shadow", "");
    //           }
    //         }
    //       });
    //     });
    //   });

    //   $.getJSON(education, function(edu) {
    //     edu.forEach(e => {
    //       $("#education").append(`
    //       <div class="singleArticle" id="edu${e.art}">
    //       <h3><u>${e.title}</u></h3>
    //       <p>
    //       ${e.intro}
    //       </p>
    //       <div class="collapse" id="collapseEdu${e.art}">
    //         <div class="mt-3">
    //           <p> 
    //           ${e.body}
    //           </p>
    //         </div>
    //       </div>
    //       <button
    //         type="button"
    //         class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
    //         data-toggle="collapse"
    //         href="#collapseEdu${e.art}"
    //         aria-expanded="false"
    //         aria-controls="collapse${e.art}"
    //         id="eduBtn${e.art}"
    //       >
    //         להמשך קריאה
    //       </button>
    //     </div>`);

    //       if (window.devicePixelRatio <= 2.200000047683716) {
    //         $("#eduBtn" + `${e.art}`)
    //           .removeClass("btn-md")
    //           .addClass("btn-lg");
    //       }

    //       // if (window.devicePixelRatio > 2.5) {
    //       //   $("#eduBtn" + `${e.art}`)
    //       //     .removeClass("btn-md")
    //       //     .addClass("btn-sm");
    //       // }

    //       if(edu.length <= 1){
    //         $("#collapseEdu" + `${e.art}`).removeClass("collapse")
    //         $("#eduBtn" + `${e.art}`).remove();
    //       }
    //       $("#eduBtn" + `${e.art}`).click(function() {
    //         if ($("#eduBtn" + `${e.art}` + ':contains("להמשך קריאה")')[0]) {
    //           $("#eduBtn" + `${e.art}`).text("סגור");
    //           $("#eduBtn" + `${e.art}`).css("background", "rgb(255, 136, 132)").css("color", "rgb(255, 235, 205)");
    //           $("#eduBtn" + `${e.art}`).mouseup(function(){
    //             $(this).blur();
    //           })
    //           $("#edu" + `${e.art}`)
    //             .siblings()
    //             .find("h3, p")
    //             .css("color", "rgb(102, 122, 134, .15)");          
    //             $("#edu" + `${e.art}`)
    //             .siblings()
    //             .find("button")
    //             .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
    //         } else {
    //           if ($("#eduBtn" + `${e.art}` + ':contains("סגור")')[0]) {
    //             $("#eduBtn" + `${e.art}`).text("להמשך קריאה");
    //             $("#eduBtn" + `${e.art}`).css("background", "").css("color", "");
    //             $("#edu" + `${e.art}`)
    //               .siblings()
    //               .find("h3, p")
    //               .css("color", "rgb(54, 73, 84)");
    //             $("#edu" + `${e.art}`)
    //               .siblings()
    //               .find("button")
    //               .removeAttr("disabled", "disabled")
    //               .css("background", "").css("box-shadow", "");
    //           }
    //         }
    //       });
    //     });
    //   });

    //   $.getJSON(intelligence, function(inteli) {
    //       inteli.forEach(e => {
    //         $("#intelligence").append(`<div class="singleArticle" id="inteli${e.art}">
    //           <h3><u>${e.title}</u></h3>
    //           <p>
    //           ${e.intro}
    //           </p>
    //           <div class="collapse" id="collapseInteli${e.art}">
    //             <div class="mt-3">
    //               <p> 
    //               ${e.body}
    //               </p>
    //             </div>
    //           </div>
    //           <button
    //             type="button"
    //             class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
    //             data-toggle="collapse"
    //             href="#collapseInteli${e.art}"
    //             aria-expanded="false"
    //             aria-controls="collapse${e.art}"
    //             id="inteliBtn${e.art}"
    //           >
    //             להמשך קריאה
    //           </button>
    //         </div>`);

    //         if (window.devicePixelRatio <= 2.200000047683716) {
    //           $("#inteliBtn" + `${e.art}`)
    //             .removeClass("btn-md")
    //             .addClass("btn-lg");
    //         }

    //         // if (window.devicePixelRatio > 2.5) {
    //         //   $("#inteliBtn" + `${e.art}`)
    //         //     .removeClass("btn-md")
    //         //     .addClass("btn-sm");
    //         // }

    //         if(inteli.length <= 1){
    //           $("#collapseInteli" + `${e.art}`).removeClass("collapse")
    //           $("#inteliBtn" + `${e.art}`).remove();
    //         }
    //         $("#inteliBtn" + `${e.art}`).click(function() {
    //           if ($("#inteliBtn" + `${e.art}` + ':contains("להמשך קריאה")')[0]) {
    //             $("#inteliBtn" + `${e.art}`).text("סגור");
    //             $("#inteliBtn" + `${e.art}`).css("background", "rgb(255, 136, 132)").css("color", "rgb(255, 235, 205)");
    //             $("#inteliBtn" + `${e.art}`).mouseup(function(){
    //               $(this).blur();
    //             })
    //             $("#inteli" + `${e.art}`)
    //               .siblings()
    //               .find("h3, p")
    //               .css("color", "rgb(102, 122, 134, .15)");          
    //               $("#inteli" + `${e.art}`)
    //               .siblings()
    //               .find("button")
    //               .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
    //           } else {
    //             if ($("#inteliBtn" + `${e.art}` + ':contains("סגור")')[0]) {
    //               $("#inteliBtn" + `${e.art}`).text("להמשך קריאה");
    //               $("#inteliBtn" + `${e.art}`).css("background", "").css("color", "");
    //               $("#inteli" + `${e.art}`)
    //                 .siblings()
    //                 .find("h3, p")
    //                 .css("color", "rgb(54, 73, 84)");
    //               $("#inteli" + `${e.art}`)
    //                 .siblings()
    //                 .find("button")
    //                 .removeAttr("disabled", "disabled")
    //                 .css("background", "").css("box-shadow", "");
    //             }
    //           }
    //         });
    //       });
    //   });


      



    //* Treatment //
      
      // $.getJSON(panicarticle, function(panic) {
      //   panic.forEach(e => {
      //     $("#panic").append(`<div class="singleArticle" id="pan${e.art}">
      //     <h3><u>${e.title}</u></h3>
      //     <p>
      //     ${e.intro}
      //     </p>
      //     <div class="collapse" id="collapsePan${e.art}">
      //       <div class="mt-3">
      //         <p> 
      //         ${e.body}
      //         </p>
      //       </div>
      //     </div>
      //     <button
      //       type="button"
      //       class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
      //       data-toggle="collapse"
      //       href="#collapsePan${e.art}"
      //       aria-expanded="false"
      //       aria-controls="collapse${e.art}"
      //       id="panBtn${e.art}"
      //     >
      //       להמשך קריאה
      //     </button>
      //   </div>`);

      //     if (window.devicePixelRatio <= 2.200000047683716) {
      //       $("#panBtn" + `${e.art}`)
      //         .removeClass("btn-md")
      //         .addClass("btn-lg");
      //     }

      //     // if (window.devicePixelRatio > 2.5) {
      //     //   $("#panBtn" + `${e.art}`)
      //     //     .removeClass("btn-md")
      //     //     .addClass("btn-sm");
      //     // }
      //     if(panic.length <= 1){
      //       $("#collapsePan" + `${e.art}`).removeClass("collapse")
      //       $("#panBtn" + `${e.art}`).remove();
      //     }
      //     $("#panBtn" + `${e.art}`).click(function() {
      //       if ($("#panBtn" + `${e.art}` + ':contains("להמשך קריאה")')[0]) {
      //         $("#panBtn" + `${e.art}`).text("סגור");
      //         $("#panBtn" + `${e.art}`).css("background", "rgb(255, 136, 132)").css("color", "rgb(255, 235, 205)");
      //         $("#panBtn" + `${e.art}`).mouseup(function(){
      //           $(this).blur();
      //         })
      //         $("#pan" + `${e.art}`)
      //           .siblings()
      //           .find("h3, p")
      //           .css("color", "rgb(102, 122, 134, .15)");          
      //           $("#pan" + `${e.art}`)
      //           .siblings()
      //           .find("button")
      //           .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
      //       } else {
      //         if ($("#panBtn" + `${e.art}` + ':contains("סגור")')[0]) {
      //           $("#panBtn" + `${e.art}`).text("להמשך קריאה");
      //           $("#panBtn" + `${e.art}`).css("background", "").css("color", "");
      //           $("#pan" + `${e.art}`)
      //             .siblings()
      //             .find("h3, p")
      //             .css("color", "rgb(54, 73, 84)");
      //           $("#pan" + `${e.art}`)
      //             .siblings()
      //             .find("button")
      //             .removeAttr("disabled", "disabled")
      //             .css("background", "").css("box-shadow", "");
      //         }
      //       }
      //     });
      //   });
      // });

      // $.getJSON(emotionarticle, function(emotion) {
      //   emotion.forEach(e => {
      //     $("#emotion").append(`<div class="singleArticle" id="emo${e.art}">
      //     <h3><u>${e.title}</u></h3>
      //     <p>
      //     ${e.intro}
      //     </p>
      //     <div class="collapse" id="collapseEmo${e.art}">
      //       <div class="mt-3">
      //         <p> 
      //         ${e.body}
      //         </p>
      //       </div>
      //     </div>
      //     <button
      //       type="button"
      //       class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
      //       data-toggle="collapse"
      //       href="#collapseEmo${e.art}"
      //       aria-expanded="false"
      //       aria-controls="collapse${e.art}"
      //       id="emoBtn${e.art}"
      //     >
      //       להמשך קריאה
      //     </button>
      //   </div>`);

      //     if (window.devicePixelRatio <= 2.200000047683716) {
      //       $("#emoBtn" + `${e.art}`)
      //         .removeClass("btn-md")
      //         .addClass("btn-lg");
      //     }

      //     // if (window.devicePixelRatio > 2.5) {
      //     //   $("#panBtn" + `${e.art}`)
      //     //     .removeClass("btn-md")
      //     //     .addClass("btn-sm");
      //     // }
      //     if(emotion.length <= 1){
      //       $("#collapseEmo" + `${e.art}`).removeClass("collapse")
      //       $("#emoBtn" + `${e.art}`).remove();
      //     }
      //     $("#emoBtn" + `${e.art}`).click(function() {
      //       if ($("#emoBtn" + `${e.art}` + ':contains("להמשך קריאה")')[0]) {
      //         $("#emoBtn" + `${e.art}`).text("סגור");
      //         $("#emoBtn" + `${e.art}`).css("background", "rgb(255, 136, 132)").css("color", "rgb(255, 235, 205)");
      //         $("#emoBtn" + `${e.art}`).mouseup(function(){
      //           $(this).blur();
      //         })
      //         $("#emo" + `${e.art}`)
      //           .siblings()
      //           .find("h3, p")
      //           .css("color", "rgb(102, 122, 134, .15)");          
      //           $("#emo" + `${e.art}`)
      //           .siblings()
      //           .find("button")
      //           .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
      //       } else {
      //         if ($("#emoBtn" + `${e.art}` + ':contains("סגור")')[0]) {
      //           $("#emoBtn" + `${e.art}`).text("להמשך קריאה");
      //           $("#emoBtn" + `${e.art}`).css("background", "").css("color", "");
      //           $("#emo" + `${e.art}`)
      //             .siblings()
      //             .find("h3, p")
      //             .css("color", "rgb(54, 73, 84)");
      //           $("#emo" + `${e.art}`)
      //             .siblings()
      //             .find("button")
      //             .removeAttr("disabled", "disabled")
      //             .css("background", "").css("box-shadow", "");
      //         }
      //       }
      //     });
      //   });
      // });

      // $.getJSON(childrenarticle, function(children) {
      //   children.forEach(e => {
      //     $("#children").append(`<div class="singleArticle" id="child${e.art}">
      //     <h3><u>${e.title}</u></h3>
      //     <p>
      //     ${e.intro}
      //     </p>
      //     <div class="collapse" id="collapseChild${e.art}">
      //       <div class="mt-3">
      //         <p> 
      //         ${e.body}
      //         </p>
      //       </div>
      //     </div>
      //     <button
      //       type="button"
      //       class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
      //       data-toggle="collapse"
      //       href="#collapseChild${e.art}"
      //       aria-expanded="false"
      //       aria-controls="collapse${e.art}"
      //       id="childBtn${e.art}"
      //     >
      //       להמשך קריאה
      //     </button>
      //   </div>`);

      //     if (window.devicePixelRatio <= 2.200000047683716) {
      //       $("#childBtn" + `${e.art}`)
      //         .removeClass("btn-md")
      //         .addClass("btn-lg");
      //     }

      //     // if (window.devicePixelRatio > 2.5) {
      //     //   $("#panBtn" + `${e.art}`)
      //     //     .removeClass("btn-md")
      //     //     .addClass("btn-sm");
      //     // }
      //     if(children.length <= 1){
      //       $("#collapseChild" + `${e.art}`).removeClass("collapse")
      //       $("#childBtn" + `${e.art}`).remove();
      //     }
      //     $("#childBtn" + `${e.art}`).click(function() {
      //       if ($("#childBtn" + `${e.art}` + ':contains("להמשך קריאה")')[0]) {
      //         $("#childBtn" + `${e.art}`).text("סגור");
      //         $("#childBtn" + `${e.art}`).css("background", "rgb(255, 136, 132)").css("color", "rgb(255, 235, 205)");
      //         $("#childBtn" + `${e.art}`).mouseup(function(){
      //           $(this).blur();
      //         })
      //         $("#child" + `${e.art}`)
      //           .siblings()
      //           .find("h3, p")
      //           .css("color", "rgb(102, 122, 134, .15)");          
      //           $("#child" + `${e.art}`)
      //           .siblings()
      //           .find("button")
      //           .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
      //       } else {
      //         if ($("#childBtn" + `${e.art}` + ':contains("סגור")')[0]) {
      //           $("#childBtn" + `${e.art}`).text("להמשך קריאה");
      //           $("#childBtn" + `${e.art}`).css("background", "").css("color", "");
      //           $("#child" + `${e.art}`)
      //             .siblings()
      //             .find("h3, p")
      //             .css("color", "rgb(54, 73, 84)");
      //           $("#child" + `${e.art}`)
      //             .siblings()
      //             .find("button")
      //             .removeAttr("disabled", "disabled")
      //             .css("background", "").css("box-shadow", "");
      //         }
      //       }
      //     });
      //   });
      // });


      // $.getJSON(adhdarticle, function(adhd) {
      //   adhd.forEach(e => {
      //     $("#adhd").append(`<div class="singleArticle" id="adh${e.art}">
      //     <h3><u>${e.title}</u></h3>
      //     <p>
      //     ${e.intro}
      //     </p>
      //     <div class="collapse" id="collapseAdh${e.art}">
      //       <div class="mt-3">
      //         <p> 
      //         ${e.body}
      //         </p>
      //       </div>
      //     </div>
      //     <button
      //       type="button"
      //       class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
      //       data-toggle="collapse"
      //       href="#collapseAdh${e.art}"
      //       aria-expanded="false"
      //       aria-controls="collapse${e.art}"
      //       id="adhBtn${e.art}"
      //     >
      //       להמשך קריאה
      //     </button>
      //   </div>`);

      //     if (window.devicePixelRatio <= 2.200000047683716) {
      //       $("#adhBtn" + `${e.art}`)
      //         .removeClass("btn-md")
      //         .addClass("btn-lg");
      //     }

      //     // if (window.devicePixelRatio > 2.5) {
      //     //   $("#adhBtn" + `${e.art}`)
      //     //     .removeClass("btn-md")
      //     //     .addClass("btn-sm");
      //     // }
      //     if(adhd.length <= 1){
      //       $("#collapseAdh" + `${e.art}`).removeClass("collapse")
      //       $("#adhBtn" + `${e.art}`).remove();
      //     }
      //     $("#adhBtn" + `${e.art}`).click(function() {
      //       if ($("#adhBtn" + `${e.art}` + ':contains("להמשך קריאה")')[0]) {
      //         $("#adhBtn" + `${e.art}`).text("סגור");
      //         $("#adhBtn" + `${e.art}`).css("background", "rgb(255, 136, 132)").css("color", "rgb(255, 235, 205)");
      //         $("#adhBtn" + `${e.art}`).mouseup(function(){
      //           $(this).blur();
      //         })
      //         $("#adh" + `${e.art}`)
      //           .siblings()
      //           .find("h3, p")
      //           .css("color", "rgb(102, 122, 134, .15)");          
      //           $("#adh" + `${e.art}`)
      //           .siblings()
      //           .find("button")
      //           .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
      //       } else {
      //         if ($("#adhBtn" + `${e.art}` + ':contains("סגור")')[0]) {
      //           $("#adhBtn" + `${e.art}`).text("להמשך קריאה");
      //           $("#adhBtn" + `${e.art}`).css("background", "").css("color", "");
      //           $("#adh" + `${e.art}`)
      //             .siblings()
      //             .find("h3, p")
      //             .css("color", "rgb(54, 73, 84)");
      //           $("#adh" + `${e.art}`)
      //             .siblings()
      //             .find("button")
      //             .removeAttr("disabled", "disabled")
      //             .css("background", "").css("box-shadow", "");
      //         }
      //       }
      //     });
      //   });
      // });

      // $.getJSON(feedbackarticle, function(feedback) {
      //   feedback.forEach(e => {
      //     $("#feedback").append(`<div class="singleArticle" id="fb${e.art}">
      //     <h3><u>${e.title}</u></h3>
      //     <p>
      //     ${e.intro}
      //     </p>
      //     <div class="collapse" id="collapseFb${e.art}">
      //       <div class="mt-3">
      //         <p> 
      //         ${e.body}
      //         </p>
      //       </div>
      //     </div>
      //     <button
      //       type="button"
      //       class="btn waves-effect waves-light collapsed btn-md artBtn btnRadius"
      //       data-toggle="collapse"
      //       href="#collapseFb${e.art}"
      //       aria-expanded="false"
      //       aria-controls="collapse${e.art}"
      //       id="fbBtn${e.art}"
      //     >
      //       להמשך קריאה
      //     </button>
      //   </div>`);

      //     if (window.devicePixelRatio <= 2.200000047683716) {
      //       $("#fbBtn" + `${e.art}`)
      //         .removeClass("btn-md")
      //         .addClass("btn-lg");
      //     }

      //     // if (window.devicePixelRatio > 2.5) {
      //     //   $("#fbBtn" + `${e.art}`)
      //     //     .removeClass("btn-md")
      //     //     .addClass("btn-sm");
      //     // }
      //     if(feedback.length <= 1){
      //       $("#collapseFb" + `${e.art}`).removeClass("collapse")
      //       $("#fbBtn" + `${e.art}`).remove();
      //     }
      //     $("#fbBtn" + `${e.art}`).click(function() {
      //       if ($("#fbBtn" + `${e.art}` + ':contains("להמשך קריאה")')[0]) {
      //         $("#fbBtn" + `${e.art}`).text("סגור");
      //         $("#fbBtn" + `${e.art}`).css("background", "rgb(255, 136, 132)").css("color", "rgb(255, 235, 205)");
      //         $("#fbBtn" + `${e.art}`).mouseup(function(){
      //           $(this).blur();
      //         })
      //         $("#fb" + `${e.art}`)
      //           .siblings()
      //           .find("h3, p")
      //           .css("color", "rgb(102, 122, 134, .15)");          
      //           $("#fb" + `${e.art}`)
      //           .siblings()
      //           .find("button")
      //           .attr("disabled", "disabled").css("background", "rgb(102, 122, 134, .15)").css("box-shadow", "none");
      //       } else {
      //         if ($("#fbBtn" + `${e.art}` + ':contains("סגור")')[0]) {
      //           $("#fbBtn" + `${e.art}`).text("להמשך קריאה");
      //           $("#fbBtn" + `${e.art}`).css("background", "").css("color", "");
      //           $("#fh" + `${e.art}`)
      //             .siblings()
      //             .find("h3, p")
      //             .css("color", "rgb(54, 73, 84)");
      //           $("#fb" + `${e.art}`)
      //             .siblings()
      //             .find("button")
      //             .removeAttr("disabled", "disabled")
      //             .css("background", "").css("box-shadow", "");
      //         }
      //       }
      //     });
      //   });
      // });      
