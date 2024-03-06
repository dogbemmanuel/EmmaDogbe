// OTHER PAGES NAV
document.getElementById("otherPagenavbarToggle").addEventListener("click", function() {
    let navbarLinksi = document.getElementById("otherPageNavbar_links");
    navbarLinksi.style.display === "flex" ? navbarLinksi.style.display = "none" : navbarLinksi.style.display = "flex";
  });
  
  
  
  // Hide navigation menu when screen is resized beyond the specified width
  window.addEventListener("resize", function() {
    let navbarLinksi = document.getElementById("otherPageNavbar_links");
    let screenWidthi = window.innerWidth;
    if (screenWidthi > 834) {
      navbarLinksi.style.display = "flex";
    } else {
      navbarLinksi.style.display = "none";
    }
  });



  
