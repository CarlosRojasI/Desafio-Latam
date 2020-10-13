var numero1 = +prompt('favor ingrese un numero que no sea cero')
var numero2 = +prompt('Favor ingrese un segundo numero, que no sea cero')

let div ='<span id="suma"></span>'
document.write(div)

var suma = document.getElementById('suma')

var total = numero1 + numero2

document.write=suma.innerHTML = ('El resultado de la suma es: ' + total)

suma.style.maxWidth = "35px"
suma.style.background = "green"
suma.style.color = "red"
suma.style.fontSize = "50px"
suma.style.textAlign = "center"
suma.style.padding = "30px"


