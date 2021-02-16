
var su_nombre = prompt('Ingrese su nombre');

var elemento = document.getElementById('bienvenida');
elemento.innerHTML = "Te damos la bienvenida \n" + su_nombre;



var elemento2 = document.getElementsByClassName('historia-descripcion');
    elemento2[0].style.color = 'darkred';
    elemento2[0].style.backgroundColor = '#a7d129';

    elemento2[1].style.border = '10px';
    elemento2[1].style.borderRightStyle = 'solid';
    elemento2[1].style.borderColor = '#444444';
    elemento2[1].style.borderLeftStyle = 'solid';

    elemento2[2].style.fontFamily = 'Arial, Helvetica, sans-serif';

var color_fondo = prompt('Elija un color para la seccion tendencias : Negro , Verde ,Amarillo');

var bg_tendencias = document.getElementById('tendencias');

/*  color_fondo = color_fondo.toLocaleLowerCase();
 */
if(color_fondo == 'negro'){
    bg_tendencias.style.backgroundColor = '#444444';
}
if(color_fondo == 'verde'){
    bg_tendencias.style.backgroundColor = 'green';
}
if(color_fondo == 'amarillo'){
    bg_tendencias.style.backgroundColor = '#ffe227';
}  

$(document).ready(function () {
    /// INICIO : FUNCION PARA OCULTAR Y MOSTRAR IMAGENES EN SECCION HISTORIA ///
    $('.ocultar').click(function ocultarImagen() { 
        $('.historia-imagen').css('display','none');
    });
    $('.mostrar').click(function mostrarImagen() { 
        $('.historia-imagen').css('display','block');
    });
    /// FIN : FUNCION PARA OCULTAR Y MOSTRAR IMAGENES EN SECCION HISTORIA ///

    /// INICIO : FUNCION SELECCIONAR FUENTE SECCION TENDENCIAS ///
    var tamanios=['sans-serif','cursive','fantasy','monospace','serif','Verdana']
    var inicio=0;
    var tendecias=$('.tam-fuente')
    $('#siguiente').click(function cambiarFuenteNext() { 
        if(inicio<tamanios.length){
        inicio++;
    }
        tendecias.css('font-family',tamanios[inicio]);
    });
    $('#anterior').click(function cambiarFuentePrev() { 
        if(inicio>0){
            inicio--;
        }
        tendecias.css('font-family',tamanios[inicio]);
    });
    /// FIN : FUNCION SELECCIONAR FUENTE SECCION TENDENCIAS ///
    /// INICIO : FUNCION MOSTRAR SECCION TENDENCIA EN MOBILE ///
    $('#navbar-tendencias').click(function monstrarSeccionTendencias() { 
        $('#tendencias').css('display','block');
        
    });
    /// FIN : FUNCION MOSTRAR SECCION TENDENCIA EN MOBILE ///

});
