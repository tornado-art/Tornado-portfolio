// TORNADO Portfolio JS

console.log("Portfolio Loaded Successfully");

// Navbar shadow on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(255,0,0,0.35)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Smooth button animation
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  btn.style.transform = "scale(1.08)";
});

btn.addEventListener("mouseleave", () => {
  btn.style.transform = "scale(1)";
});

// Hero fade animation
window.onload = () => {
  const hero = document.querySelector(".hero");

  hero.style.opacity = "0";
  hero.style.transform = "translateY(40px)";

  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 300);
};// Typing Animation

const text = "Professional Video Editor";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.addEventListener("load", typeWriter);
const texts = [
  "Professional Video Editor",
  "Cinematic Editor",
  "Motion Graphics Artist",
  "YouTube Editor",
  "Reels Editor"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
})();const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
topBtn.style.display=window.scrollY>300?"block":"none";
});

topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};