var lastScrollTop = 0;
window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.body.scrollTop;
  var header = document.getElementById("header");
  if (currentScroll > lastScrollTop) {
    header.classList.add("header-hidden");
  }
  else{
    header.classList.remove("header-hidden");
    }
  }
);
