"use strict";

/*
   Author: Dayna Sommer
   MSU Denver login name: dsommer5

   Final Project Style Sheet
   Filename: tabs.js
*/

/* in HTML use this code to link file...

<script src="tabs.js" defer></script>

*/

const about = document.querySelector(".about-tabs");
const btns = document.querySelectorAll(".tabbutton");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide content
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
