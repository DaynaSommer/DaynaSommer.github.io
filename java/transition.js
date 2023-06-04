"use strict";

/*
   Author: Dayna Sommer
   MSU Denver login name: dsommer5

   Final Project Style Sheet
   Filename: transition.js

*/

/* in HTML use this code to link file...

<script src="transition.js" defer></script>

*/

const circle = document.querySelector('#momphoto');

momphoto.addEventListener('mouseenter', () => {
    if(!momphoto.classList.contains('hover')) {
        momphoto.classList.add('hover');
    }
});

momphoto.addEventListener('mouseleave', () => {
    if (momphoto.classList.contains('hover')) {
        momphoto.classList.remove('hover');
    }
});
