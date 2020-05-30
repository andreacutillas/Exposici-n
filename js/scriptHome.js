
function changeMenuColor() {
    "use strict";

    var menu = document.getElementById("menu");
    var scroll = window.scrollY + menu.offsetHeight;

    // get all sections
    var sections = document.getElementsByTagName("section");

    // identify current section
    var current_section;
    var i;
    for (i = 0; i < sections.length; i++) {
        if (scroll >= sections[i].offsetTop) {
            current_section = sections[i];
            var bg = sections[i].style.backgroundColor;
        }
    } 

    if (current_section) {
        menu.style.backgroundColor = window.getComputedStyle(current_section).backgroundColor;
        console.log("current section: " + current_section.getAttribute("id"));    
    } else {
        console.log("no section"); 
        menu.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
    

}

window.onscroll = function () {
    "use strict";
    changeMenuColor();
};