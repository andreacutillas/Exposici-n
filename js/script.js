function openImage(figure) {
    "use strict";
    var body = document.getElementsByTagName("body")[0];

    //Se busca la ruta de la imagen
    var ruta_imagen = figure.firstElementChild.getAttribute("src");

    //Se busca la imagen de la ventana modal y se le asigna el valor de la ruta en su atributo src
    var imagen = document.getElementById("modal").firstElementChild.firstElementChild;
    imagen.setAttribute("src", ruta_imagen);

    //Se extrae el texto del figcaption del figure pulsado y se añade en el de la ventana modal
    var pie = document.getElementById("modal").firstElementChild.lastElementChild;
    pie.innerHTML = figure.lastElementChild.innerHTML;

    //Se muestra la ventana modal
    document.getElementById("modal").style.display = "flex";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}

/**
 * Oculta la ventana modal
 */
function cerrarVentana() {
    var body = document.getElementsByTagName("body")[0];
    "use strict";
    document.getElementById("modal").style.display = "none";
    body.style.position = "inherit";
	body.style.height = "auto";
	body.style.overflow = "visible";
};


function toggleMapa() {
    
    var mapa = document.getElementsByClassName("mapa")[0] ;

    if (mapa.style.left == "30vw") {
        mapa.style.left = "0vw";
    } else {
        mapa.style.left = "30vw";
    }
} 



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



/*
function isElementVisible(elementToBeChecked) {
    var TopView = window.scrollTop();
    var BotView = TopView + window.height();
    var TopElement = elementToBeChecked.offset().top;
    var BotElement = TopElement + elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

window.onscroll = function () {
    var quien = isElementVisible("#quien");
    var donde = isElementVisible("#donde");
    var expo = isElementVisible("#expo");

    if (quien) {
        document.getElementById("#menu").style.backgroundColor = "#CC5252";
    }
   
    
    if (donde) $("#menu").css("background", "rgba(196, 196, 196, 0.2);");
    if (expo) $("#menu").css("background", "#CC5252");

};
*/ 

        
        
function openMenu() {
    "use strict";
    //Buscamos los li y los guardamos en una variable
    var opciones = document.getElementById("menu").firstElementChild.children;
    //La variable i nos ayudará a recorrer el bucle e ir presentando las opciones
    var i;
    for (i = 0; i < opciones.length; i = i + 1) {
        opciones[i].style.display = "block";
    }
}

function closeMenu() {
    "use strict";
    //Solo cerramos el menú cuando la pantalla es pequeña (menor a 700px de ancho)
    if (window.innerWidth <= 700) {
        var opciones = document.getElementById("menu").firstElementChild.children;
        var i;
        opciones[0].style.display = "block";
        for (i = 1; i < opciones.length; i = i + 1) {
            opciones[i].style.display = "none";
        }
    }
} 

 function menu() {
    "use strict";
    if (document.getElementById("menu").firstElementChild.lastElementChild.style.display === "block") {
        closeMenu();
    } else {
        openMenu();
    }
}

function openedMenu() {
    "use strict";
    var opciones = document.getElementById("menu").firstElementChild.children;
    var i;
    opciones[0].style.display = "none";
    for (i = 1; i < opciones.length; i = i + 1) {
        opciones[i].style.display = "block";
    }
} 

 
window.onresize = function () {
    "use strict";
    if (window.innerWidth <= 700) {
        closeMenu();
    } else {
        openedMenu();
    }
}
 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        