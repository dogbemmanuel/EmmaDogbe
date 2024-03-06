// SKILLS BAR

// $(".skills_container").addClass("active")
// $(".skills_container .skill .skill-bar span").each(function() {
//    $(this).animate({
//       "width": $(this).parent().attr("data-bar") + "%"
//    }, 1000);
//    $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
// });
// setTimeout(function() {
//    $(".skills_container .skill .skill-bar span b").animate({"opacity":"1"},1000);
// }, 2000);



$(document).ready(function(){
   // Add smooth scrolling to all links
   $("a").on('click', function(event) {
 
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();
 
       // Store hash
       var hash = this.hash;
 
       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){
 
         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });
 });






 

 