// Ejemplo 1 de javaScript 

/*  */
    var nombre = prompt('Favor ingrese su primer nombre')
    var Apellido = prompt('Favor ingrese su segundo nombre')
    var edad = prompt('Favor ingrese su edad')
    var hobie = prompt('Favor indique su hobie favorito')
    var color = prompt('Favor ingrese un color deseado (en ingles)')

    let div ='<div id="cuadrito"></div>'
    document.write(div)

    var cuadrito = document.getElementById('cuadrito')

    var total = nombre + ' ' + Apellido + ' ' + edad + ' ' + hobie

    cuadrito.innerHTML = total

    cuadrito.style.background = color
    cuadrito.style.color = "green"
    cuadrito.style.fontSize = "50px"
    cuadrito.style.textAlign = "center"




// ejemplo 2 con botones en el navegador

/*
let div ='<div id="cuadrito"></div>'
document.write(div)

var cuadrito = document.getElementById('cuadrito')

function ejecutable() {

    var nombre = prompt('Favor ingrese su primer nombre')
    var nombre2 = prompt('Favor ingrese su segundo nombre')
    var edad = prompt('Favor ingrese su edad')
    var hobie = prompt('Favor indique su hobie favorito')
    var color = prompt('Favor ingrese un color deseado (en ingles)')

    var total = nombre +' ' + nombre2 + ' ' + edad + ' ' + hobie

    cuadrito.innerHTML = total

    cuadrito.style.background = color
    cuadrito.style.color = "green"
    cuadrito.style.fontSize = "50px"
    cuadrito.style.textAlign = "center"
}

// ejemplo 3 con JavaScript cambio de fondo y restauración  



function cambio (){
    document.body.style.background = 'black'
    document.body.style.color = 'white'
}

function retorno (){
    document.body.style.background = 'white'
    document.body.style.color = 'black'

}

*/


