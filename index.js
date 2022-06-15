"use strict";

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const btnContact = document.querySelector(".contact-btn");
const footer = document.querySelector("#contact");
const hamburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".hamburger-menu");
// navLinks.forEach((el) =>
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = e.target.getAttribute("href");
//     if (!e.target.classList.contains("nav-link")) return;

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   })
// );

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  hamburger.classList.toggle("open");
  hamMenu.classList.toggle("clicked");
});

navbar.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  if (!e.target.classList.contains("nav-link")) return;

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

btnContact.addEventListener("click", function (e) {
  e.preventDefault();

  footer.scrollIntoView({ behavior: "smooth" });
});
