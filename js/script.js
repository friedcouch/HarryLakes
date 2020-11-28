var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar-header").style.top = "0";
  } else {
    document.getElementById("navbar-header").style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
}