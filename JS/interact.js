
// FLASHING OF PROJECTS, LANDING PAGE LEFT

let slidenumber = 0;
displaySlides();

function displaySlides() {
  let n;
  let slides1 = document.getElementsByClassName("slide_text");
  let dots1 = document.getElementsByClassName("dot1");
  for (n = 0; n < slides1.length; n++) {
    slides1[n].style.display = "none";  
  }
  slidenumber++;
  if (slidenumber > slides1.length) {slidenumber = 1}    
  for (n = 0; n < dots1.length; n++) {
    dots1[n].className = dots1[n].className.replace(" active", "");
  }
  slides1[slidenumber-1].style.display = "block";  
  dots1[slidenumber-1].className += " active";
  setTimeout(displaySlides, 2000); // Change image every 2 seconds
}

// FLASHING OF PROJECTS, LANDING PAGE RIGHGT

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// FLASHING OF WHAT WE DO AT THE ABOUT ME PAGE

const textContainer = document.getElementById("textContainer");
const texts = ["frontend?", "UI UX?", "website?", "editor?", "IT tutor"];

let index = 0;

function changeText() {
  textContainer.textContent = texts[index];
  index = (index + 1) % texts.length;
 }

setInterval(changeText, 2000);





// ACCORDIAN, IM USING THIS ONE
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}




// YEARS OF EXPERIENCE COUNTER



// TESTIMONIALS  CAROUSEL SWIPER

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });z




// FORMS

// var form = document.getElementById("my-form");
    
//     async function handleSubmit(event) {
//       event.preventDefault();
//       var status = document.getElementById("my-form-status");
//       var data = new FormData(event.target);
//       fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//       }).then(response => {
//         if (response.ok) {
//           status.innerHTML = "Thanks for your submission!";
//           form.reset()
//         } else {
//           response.json().then(data => {
//             if (Object.hasOwn(data, 'errors')) {
//               status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//             } else {
//               status.innerHTML = "Oops! There was a problem submitting your form"
//             }
//           })
//         }
//       }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//       });
//     }
//     form.addEventListener("submit", handleSubmit)



// ======= SHOW / HIDE MENU ON MOBILE VIEWS =============
// Toggle navigation menu on button click
document.getElementById("navbar-toggle").addEventListener("click", function() {
  var navbarLinks = document.getElementById("navbar_links");
  navbarLinks.style.display === "flex" ? navbarLinks.style.display = "none" : navbarLinks.style.display = "flex";
});

// Hide navigation menu when screen is resized beyond the specified width
window.addEventListener("resize", function() {
  var navbarLinks = document.getElementById("navbar_links");
  var screenWidth = window.innerWidth;
  if (screenWidth > 834) {
    navbarLinks.style.display = "flex";
  } else {
    navbarLinks.style.display = "none";
  }
});

// Call resize event to hide or show navigation links upon page load