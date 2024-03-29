function onToggleMenu(icon) {
  const navLinks = document.querySelector(".nav-links1");
  const menuLinks = document.querySelectorAll(".nav-links1 li");
  navLinks.classList.toggle("hidden");
  menuLinks.forEach((link) => {
    link.classList.toggle("mx-3");
  });
}

//hiding nav after scolling
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;
  const nav = document.querySelector("nav");
  if (currentScrollTop > 0) {
    nav.classList.add("bg-white");
  } else {
    nav.classList.remove("bg-white");
  }

  if (currentScrollTop > lastScrollTop) {
    nav.classList.add("scroll-hide");
  } else {
    nav.classList.remove("scroll-hide");
  }
  lastScrollTop = currentScrollTop;
});

//the fating text
document.addEventListener("DOMContentLoaded", function () {
  let fadingText = document.getElementById("fadingText");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let fadeFactor = 0.002;
    let opacity = 1 - scrollPosition * fadeFactor;

    fadingText.style.opacity = opacity > 0 ? opacity : 0;
  });
});

//loading
let loader = document.querySelector("#loading-page");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
// revealer
ScrollReveal().reveal(".headline", { duration: 3000 });
for (let i = 0; i <= 21; i++) {
  const selector = `.word${i}`;
  const delay = i * 100;
  ScrollReveal().reveal(selector, { delay: delay });
}

// video

const video = document.querySelector(".video-container video");

video.addEventListener("mouseenter", function () {
  video.play();
});

video.addEventListener("mouseleave", function () {
  video.pause();
});

// video section mehdi

// Get the video element
const mvideo = document.getElementById("video-mehdi");

// When the video ends, execute the loop function
mvideo.addEventListener("ended", function () {
  // Set the current time to 3 seconds before the end
  mvideo.currentTime = mvideo.duration - 2.3;

  // Play the video
  mvideo.play();
});

// youssef part

window.addEventListener("scroll", function () {
  let sticky = document.getElementById("sticky");
  let bgblack = document.getElementById("bg-black");
  let ussefimg = document.getElementById("ussefimg");
  let scrollPosition = window.scrollY;

  if (scrollPosition >= 4700) {
    sticky.style.position = "relative";
    bgblack.style.display = "block";
    bgblack.classList.remove = "hidden";
    sticky.classList.remove("sticky");
    ussefimg.classList.remove("hidden");
  } else {
    bgblack.style.display = "";
    bgblack.classList.add = "hidden";
    sticky.style.position = "";
    sticky.classList.add("sticky");
    ussefimg.classList.add("hidden");
  }
});
