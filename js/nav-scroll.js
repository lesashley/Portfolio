var lastScrollTop = 0;
window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.body.scrollTop;
  var header = document.getElementById("header");
  if (currentScroll > lastScrollTop) {
    header.classList.remove("header-hidden");
    header.style.opacity = 0;
  } else{
    header.classList.add("header-hidden");
    header.style.opacity = 1;
    if (currentScroll <=3) {
    header.classList.remove("header-hidden");
    }
  }
  lastScrollTop = currentScroll;
},false);
