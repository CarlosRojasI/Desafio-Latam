//*****************************************************
//******** Ejercicio numero 1  ************************
//*****************************************************

// var itemClase = document.getElementsByClassName('item')[0]
//     console.log(itemClase)
// var lista = document.getElementById('lista')
//     console.log(lista)
// var botones = document.getElementsByClassName('botones')
//     console.log(botones)
// var parrafo = document.getElementsByTagName('p')
//     console.log(parrafo)

//*****************************************************
//******** Ejercicio numero 2  ************************
//*****************************************************

// document.getElementById('lista1').innerHTML = "Ingrese el nombre"
// document.getElementById('lista2').type = "submit"
// document.getElementById('lista2').value = "Enviar formulario"
// document.getElementById('lista2').setAttribute('style', "color:blue; background-color:gray")

 

// var titulo = document.createElement('h3');
// titulo.innerHTML = 'Creando elemento desde JavaScript';
// document.body.appendChild(titulo);

// let caja = document.getElementById('caja');
// let button = document.createElement('button');
// button.setAttribute('type', 'button');
// button.setAttribute('title', 'click aquí!!!');
// button.innerHTML = "Boton nuevo";
// document.body.replaceChild(button, caja);

// var borrando = document.getElementById('borrame')
// document.body.removeChild(borrando)

//*****************************************************
//******** Ejercicio numero 3  ************************
//*****************************************************

// var parrafo = document.createElement('p');
// parrafo.innerHTML = 'Nuevo parrafo creado desde JavaScript';
// document.body.appendChild(parrafo)

// let caja = document.getElementById('caja')
// let enlace = document.createElement('a');
// enlace.setAttribute('href', 'https://desafiolatam.com/');
// enlace.setAttribute('title','Ingresa Aquí');
// enlace.innerHTML = 'Desafio Latam';

// document.body.replaceChild(enlace, caja);
// var eliminar = document.getElementById('eliminar')
// document.body.removeChild(eliminar)


// let box = document.getElementById("box");
// box.addEventListener("click", function () {
//   alert("click sobre la caja");
// });



// function miFuncionAlerta(){
//     alert('click sobre la caja nuevamente');
//     }
//     let box = document.getElementById('box');
//     box.addEventListener('click', miFuncionAlerta);
    


    // box.addEventListener('mouseover', function(){
    //     box.innerHTML = 'El puntero está por encima';
    //     });
    //     box.addEventListener('mouseout', function(){
    //     box.innerHTML = 'El puntero ya no está por encima';
    //     });
        


    // let box = document.getElementById('box');
    // box.addEventListener('click', function(){
    // alert('click sobre la caja');
    // });
    


    // function miFuncionAlerta(){
    //     alert('click sobre la caja');
    //     }
    //     let box = document.getElementById('box');
    //     box.addEventListener('click', miFuncionAlerta);
        
    // box.addEventListener('mouseover', function(){
    //     box.innerHTML = 'El puntero está por encima';
    //     });
    //     box.addEventListener('mouseout', function(){
    //     box.innerHTML = 'El puntero ya no está por encima';
    //     });
        

    
    // var miBtn = document.getElementById("boton");
    // miBtn.addEventListener('click',function(){
    // var texto = document.querySelector(".input-a-buscar");
    // document.querySelector(".resultado").innerHTML = "Estas buscando: " +
    // texto.value;
    // });


//*****************************************************
//******** ejercicio numero 4  ************************
//*****************************************************

// Desarrolla un programa en JavaScript que permita
// leer el número ingresado por el usuario en un campo creado con un elemento input del tipo “number” y un id con el nombre “entrada”, 
// solo cuando se active el enlace mediante un clic del usuario. El lugar para mostrar  el mensaje se encuentra al final de la 
// estructura HTML y posee la clase con nombre “resultado”,
// dicho mensaje debe indicar, por ejemplo: “El número ingresado fue el 23”. 
// Para ello cuentas con el siguiente HTML:



    // var miBtn = document.getElementById("evento");       // esta variable asigna a miBtn lo que pasa en el Id llamado evento
    // miBtn.addEventListener('click', function(){          // a la variable miBtn se le pasa un evento de tipo Listener tipo 'click' y una funsion anonima
    //     var texto = document.querySelector("#entrada");  //  la funsion asigna a una variable llamada texto por medio de querySelector el contenido del Id entrada 
    //     document.querySelector(".resultado").innerHTML = "el número ingresado fue el: " + texto.value; // por medio de otro querySelector pasamos al id resultado el contenido concatenado mas el valor capturado en texto por el metodo value
    // })


    //*****************************************************
//******** Ejercicio numero 5  ************************
//*****************************************************

    // var botonEnviar = document.getElementById("enviar");
    //     botonEnviar.addEventListener('click',saludo);
    // function saludo(){
    // var nombre = document.querySelector(".nombre");
    // var edad = document.querySelector(".edad");
    //     document.querySelector(".resultado").innerHTML = `Hola ${nombre.value}, tu edad es ${edad.value} años`;
    // };
    

//     Ahora te toca a ti (5)

// Desarrolla un programa en JavaScript que permita leer el primer nombre y el primer apellido ingresados por el usuario en campos
// separados creados con elementos input del tipo “text”, con una clase denominada “nombre” y otra “apellido” respectivamente, 
// sólo cuando se active el enlace mediante un clic del usuario en un botón destinado para tal fin en una función externa al 
// listener. El mensaje final debe indicar, por ejemplo: “Hola Desafío Latam, tu nombre es Desafío y tu apellido es Latam”.
//  El lugar para mostrar el mensaje se encuentra al final de la estructura HTML y posee la clase con nombre “mensaje”. 
//  Para ello cuentas con el siguiente HTML:


// var botonEnviar = document.getElementById("enviar");
//     botonEnviar.addEventListener('click',saludo);

// function saludo(){
//     var nombre = document.querySelector(".nombre");
//     var apellido = document.querySelector(".apellido");
//       document.querySelector(".mensaje").innerHTML = `Hola desaio Latam, tu nombre es ${nombre.value} y tu apellido es ${apellido.value}`
// };
 // error fue no coloca la clase mensaje.

 //*****************************************************
//******** Ejercicio numero 6  ************************
//*****************************************************


// let form = document.getElementById( "formulario" );
// form.addEventListener( "submit", login);

//     function login(event){
//         event.preventDefault();
//         var nombre = document.querySelector(".nombre");
//         var correo = document.querySelector(".correo");
//         var clave = document.querySelector(".clave");
//         alert(`Hola ${nombre.value}, tu correo es ${correo.value} y tu clave es ${clave.value}, Bienvenido`);
//         };



 //*****************************************************
//******** Ejercicio numero 8  ************************
//*****************************************************

// No funciona ejercicio 8

// var miBtn = document.getElementById("boton")
// miBtn.addEventListener('click', function(){
//     var texto = document.querySelector(".input-a-buscar");

//     if (texto.value !== "" ) {
//         document.querySelector(".resultado").innerHTML = "Estas buscando: " + texto.value;
//     }          
// })



// Ahora te toca a ti (8)
// Un sitio web necesita implementar un pequeño formulario para registrar el correo de los usuarios que deseen recibir notificaciones. 
// Para ello, debes validar el ingreso del dato en el campo del correo antes de poder procesar la información, es decir, 
// el campo no puede estar sin datos, por esta razón, cuando el usuario haga un clic sobre el botón el campo debe
// revisarse y verificar que contenga dato. Esta condición se debe mostrar en un mensaje en el caso de no existir dato alguno en 
// el campo indicando que “debe existir un correo electrónico para poder registrarse”, de existir dato se debe mostrar, 
// ejemplo: “tu correo electrónico usuario@correo.com fue registrado con éxito.” todo esto mediante un alert.


// se debe validar si es id o submit, ya que en este ejemplo, el boton no tiene id y se toma el contenido por medio del submit.

// var formulario = document.getElementById("formulario")
// formulario.addEventListener('submit', saludo)

// function saludo (event){
//     event.preventDefault();

//     var correo = document.querySelector(".correo")
//     if (correo.value != ''){
//    alert(`tu email ${correo.value} fue registradocon exito`)
//     } else {
//         alert(`Debe existir un correo para registrase`)
// }
// }





 //*****************************************************
//******** Ejercicio numero 9  ************************
//*****************************************************



// var buscar = document.getElementById("buscar");
// buscar.addEventListener('click' , validar);

// function validar(){
//     var animal = document.querySelector(".animal").value;
//     var patron1 = /gato/i ;
//     var patron2 = /perro/i ;
//     if (animal.match(patron1) || animal.match(patron2)){
//     alert( "Palabra ingresada permitida" );
//     } else {
//     alert( "La palabra ingresada no es permitida" );
//     }
//     };

// Ahora te toca a ti 9

// var buscar = document.getElementById("buscar");
// buscar.addEventListener('click', validar);

// function validar(){
//     var palabra = document.querySelector(".palabra").value;
//     var patron1 = /JavaScript/i
//     var patron2 = /NodeJS/i
//     var patron3 = /VueJS/i
//     if (palabra.match(patron1) || palabra.match(patron2) || palabra.match(patron3)){
//         alert("Palabra Permitida");
//     }else {
//         alert("Palabra No permitida");
//     }
// }
 


 //*****************************************************
//******** Ejercicio numero 10  ************************
//*****************************************************

// var enviar = document.getElementById("enviar")
// enviar.addEventListener('click',validar)

// function validar(){
//  var texto = document.querySelector(".texto").value
//  var patron1 = /flaco/gim;
//  var patron2 = /gordo/gim;
//  var patron3 = /^bajo/gim;
//  var patron4 = /alto$/gim;
//  if(texto.match(patron1) || texto.match(patron2) || texto.match(patron3) || texto.match(patron4)){
//      alert("Las palabras ingresadas no son permitidas")
//  }else [
//      alert("Las palabras ingresadas son permitidas")]
// }


// Ahora te toca a ti (10)

// Para un formulario donde se solicita al usuario ingresar una opinión personal, validar el
// ingreso de ese comentario donde no se permitirán palabras como: “casi, nunca o siempre”,
// al igual que la palabra “horrible” pero al inicio del texto o la palabra “hermoso” al final del
// texto. Al no cumplirse la validación se generará un mensaje de error en un alert. Para este
// ejemplo se cuenta con el extracto del formulario que tendrá disponible el usuario.


// var enviar = document.getElementById("enviar")
// enviar.addEventListener('click', validar)

// function validar(){
//     var texto = document.querySelector(".texto").value  // se debe definir y falto el .
//     var patron1 = /casi/gim
//     var patron2 = /nunca/gim
//     var patron3 = /siempre/gim
//     var patron4 = /^horrible/gim
//     var patron5 = /hermoso$/gim
//     if(texto.match(patron1) || texto.match(patron2) || texto.match(patron3) || texto.match(patron4) || texto.match(patron5)){
//         alert("Esta palabra no correspone")
//     }else {
//         alert("Esta palabra si se puede ingresar")
//     }
// }


 //*****************************************************
//******** Ejercicio numero 11  ************************
//*****************************************************

// var enviar = document.getElementById("enviar")
// enviar.addEventListener("click", validar)

// function validar(){
//     var lugar = document.querySelector('.lugar').value
//     var permitido = /[a-zA-Z]/gim
//     if(lugar.match(permitido)){
//         alert("El texto ingresado es permitido")
//     }else {
//         alert('Solo debe ingresar caracteres alfabéticos')
//     }
// }



// Ahora te toca a ti (11)
// Para un formulario donde se solicita al usuario ingresar su edad, validar el ingreso de ese
// campo donde se permitirán números del 0 al 9. De lo contrario, no puede permitir el envío de
// la información, generando un mensaje de error en un alert. Para este ejemplo se cuenta con
// el extracto del formulario que tendrá disponible el usuario.


// var enviar = document.getElementById("enviar")
// enviar.addEventListener("click", validar)

// function validar(){
//     var edad = document.querySelector('.edad').value
//     var permitido = /[0-9]/gim
//     if(edad.match(permitido)){
//         alert("su edad es : " + edad)
//     }else {
//         alert('error, debe ingresar su edad solo con numeros')
//     }
// }




 //*****************************************************
//******** Ejercicio numero 12 ************************
//*****************************************************

// var enviar = document .getElementById( "enviar" );
// enviar.addEventListener( 'click' , validar );

// function validar(){
//     var mascota = document.querySelector( ".mascota" ).value;
//     var permitido = /\d/gim ;
//     if (mascota.match(permitido)){
//     alert( "El texto ingresado es permitido" );
//     } else {
//     alert( "El texto ingresado debe contener por lo menos un número" );
//     };
//     };


    // Para un formulario donde se solicita al usuario ingresar su edad y nombre en un solo campo,
    // validar el ingreso de ese campo donde se permitirán caracteres desde la a hasta la z y
    // desde el 0 hasta el 9, pero el campo no debe contener otro tipo de carácter especial como
    // comas, guiones, puntos, entre otros, como caracteres únicos dentro del campo. De lo
    // contrario, no puede permitir el envío de la información, generando un mensaje de error en un
    // alert. Para este ejemplo se cuenta con el extracto del formulario que tendrá disponible el
    // usuario.

// var enviar = document .getElementById( "enviar" );
// enviar.addEventListener( 'click' , validar );

// function validar(){
//     var info = document.querySelector(".info").value;
//     var patron = /\w/gim
//     if (info.match(patron)){
//         alert("La información es correcta")
//     }else {
//         alert("estos datos no estan permitidos")
//     }
// }

 //*****************************************************
//******** Ejercicio numero 13 ************************
//*****************************************************

let form = document.getElementById( "form" );
form.addEventListener( "submit" , function ( event ) {
    event.preventDefault();

    limpiarErrores();

    let textNombre = document.querySelector(".textNombre").value;
    let textAsunto = document.querySelector(".textAsunto").value;
    let textMensaje = document.querySelector(".textMensaje").value;


    let resultado = validar(textNombre,textAsunto,textMensaje);

    if (resultado == true ) {
        exito();
    };
});



function limpiarErrores () {
    document.querySelector(".resultado").innerHTML = "" ;
    document.querySelector(".errorNombre").innerHTML = "" ;
    document.querySelector(".errorAsunto").innerHTML = "" ;
    document.querySelector(".errorMensaje").innerHTML = "" ;
    };

function exito () {
    document.querySelector(".resultado").innerHTML = "Formulario paso la válidación" ;
    };
    function validar (nombre,asunto,mensaje,telefono,email) {
        let pasamosLaValidacion = true ;
        let validacionNombre = /[a-zA-Z]/gim ;

        if (validacionNombre.test(nombre) == false) {
            document.querySelector( ".errorNombre" ).innerHTML = "Ingrese un nombre válido."
            pasamosLaValidacion = false ;
    }

        let validacionAsunto = /[a-zA-Z]/gim ;

        if (validacionAsunto.test(asunto) == false) {
            document.querySelector( ".errorAsunto" ).innerHTML = "Ingrese un asunto al documento."
            pasamosLaValidacion = false ;
    }

    let validacionMensaje = /[a-zA-Z]/gim ;

    if (validacionMensaje.test(asunto) == false) {
        document.querySelector( ".errorMensaje" ).innerHTML = "Ingrese un mensaje al documento."
        pasamosLaValidacion = false ;
}


        return pasamosLaValidacion;

    };




