function setImagenActual(n) {
    "use strict";
    var figure = document.getElementById("galeria1").children[n - 1];
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






/*function goTo(section, elementNumber) {
    "use strict";
    var scroll = document.getElementById(section).offsetTop - 64;
    window.scrollTo(0, scroll);
    var menuElements = document.getElementById("menu2").firstElementChild.children;
    for (var i = 0; i < menuElements.length; i = i + 1) {
        menuElements[i].className = "";
    }
    menuElements[elementNumber - 1].className = "active";
}

function changeOpacity() {
    "use strict";
    var opacity = 0;
    var i;
    var scroll = window.scrollY;
    var max_scroll = window.innerHeight - 60;
    if (scroll <= max_scroll) {
        opacity = scroll / max_scroll;
        var menu = document.getElementById("menu2");
        menu.style.backgroundColor = "rgba(151, 221, 228, " + opacity + ")";
    }
}


window.onscroll = function () {
    "use strict";
    changeOpacity();
};

*/

/*
function moverMapa() {
    var mapa = document.getElementsByClassName("mapa")[0] ;

    mapa.style.left = "-20%";

} 


function mapa() {
    "use strict";
    var scroll = window.scrollY;
    //Si el scroll ha llegado a media pantalla
    if (scroll >= window.innerHeight / 2) {
        //Ponemos el menú en su posición
        document.getElementById("mapa").style.left = "0";
    } else {
        //Ocultamos el menú
        document.getElementById("mapa").style.left = "30%";
    }
}

window.onscroll = function () {
    "use strict";
    mapa();
};

*/
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


<nav id="menu">
            <a class="active" href=index.html>DOROTHEA<strong>LANGE</strong></a>
            <nav id="menu2">
                <ul>
                    <li onclick="goTo('quien', 1)">¿QUIÉN?</a></li>
                    <li onclick="goTo('donde', 2)">¿DÓNDE?</li>
                    <li onclick="goTo('expo', 3)">EXPO</li>
                </ul>
            </nav>  
        </nav>
*/      
        
        
        
/* function openMenu() {
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
} */

/* function menu() {
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
} */

/* 
window.onresize = function () {
    "use strict";
    if (window.innerWidth <= 700) {
        closeMenu();
    } else {
        openedMenu();
    }
}
 */
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        