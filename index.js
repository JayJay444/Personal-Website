document.getElementById("link-about").addEventListener("click", function() {
  window.scrollTo(0, 40);
});
document.getElementById("link-techno").addEventListener("click", function() {
  if (window.innerWidth < 800) {
    window.scrollTo(0, 840);
  } else {
    window.scrollTo(0, 440);
  }
});
document.getElementById("link-contact").addEventListener("click", function() {
  if (window.innerWidth < 800) {
    window.scrollTo(0, 1640);
  } else {
    window.scrollTo(0, 840);
  }
});
document.getElementById("link-projects").addEventListener("click", function() {
  if (window.innerWidth < 800) {
    window.scrollTo(0, 2440);
  } else {
    window.scrollTo(0, 1240);
  }
});
