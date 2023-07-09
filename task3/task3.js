//Manipulating the tile of the page

document.title="Hello";
//  we can also chang it by getting tagname

var headerTitle=document.getElementById("main-header");

headerTitle.style.borderBottom= "solid 3px #000";

title1= document.getElementsByClassName('title');   
// here in index.html file multiple headers have tilte class name so it gives plural output
title1[0].style.fontWeight='Bold';
title1[0].style.color='green';
