
var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var consultaDental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];


var traumatologiaNuevosIngresos = [
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'ISAPRE'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'ISAPRE'},
]


// Ejercicio numero 1 metodo concat
// Solicitud:  Agregar las siguientes horas al arreglo de Traumatología:

var traumatologiaTotal = traumatologia.concat(traumatologiaNuevosIngresos)

const trauma = document.getElementById("trauma")

for(consultaTrauma of traumatologiaTotal){
    trauma.innerHTML += `
    <tr>
        <td>${consultaTrauma.hora}</td>
        <td>${consultaTrauma.especialista}</td>
        <td>${consultaTrauma.paciente}</td>
        <td>${consultaTrauma.rut}</td>
        <td>${consultaTrauma.prevision}</td>

    </tr>
    `
}

// Ejercicio numero 2 metodos Pop y Shif
//  Eliminar el primer y último elemento del arreglo de Radiología

const radio = document.getElementById("radio")

for(consultaRadiologia of radiologia){
    radio.innerHTML += `
    <tr>
        <td>${consultaRadiologia.hora}</td>
        <td>${consultaRadiologia.especialista}</td>
        <td>${consultaRadiologia.paciente}</td>
        <td>${consultaRadiologia.rut}</td>
        <td>${consultaRadiologia.prevision}</td>

    </tr>
    `
}

// Por medio de Método pop al ultimo paciente

var longitudRadiologia = radiologia[radiologia.length -1]

radiologia.pop();
console.log(radiologia);

// Por medio del metodo shift se elimino al primer paciente

radiologia.shift();

// Impresion de resultado, estos pacientes no estaran en la tabla expuesta.
document.getElementById('parrafo-radio').innerHTML = `El primer paciente dado de alta es: ${radiologia[0].paciente} y el último de la lista es ${longitudRadiologia.paciente} `


//// paso 3   Metodo forEach
// Imprimir en la página HTML, mediante document.write y/o la funciones que estime conveniente, la lista de consultas médicas de Dental. 
// Sin embargo, debe hacerlo separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo.
// Ejemplo:
// 8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE
// 11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE

var pruebaDental = document.getElementById("prueba-dental")

consultaDental.forEach((e) => {
    pruebaDental.innerHTML += 
    `<p> ${e.hora} - ${e.especialista} - ${e.paciente} - ${e.rut} - ${e.prevision} </p> `
});


//  Ejercicio 4 

// Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para ésto, deberá unir todos los nombres de pacientes 
// e imprimir uno por cada párrafo.
// Ejemplo:
// FRANCISCA ROJAS
// PAMELA ESTRADA
// ARMANDO LUNA…

var todos = traumatologiaTotal.concat(radiologia.concat(consultaDental))

var cajaTodos = document.getElementById("todos")
todos.forEach((e) => {
    console.log(e)
    cajaTodos.innerHTML += 
    `<p> ${e.paciente} </p> `
});


//  Ejercicio 5 metodo filter
// Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
// de Dental.


var isapre = document.getElementById("isapre")
var prevision = consultaDental.filter(function(e){
    return e.prevision == "ISAPRE";
    });

    prevision.forEach((e) => {
        isapre.innerHTML += ` <p> ${e.paciente} - ${e.prevision} </p>`
    })
    


// Ejercicio 6
// Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas
// médicas de Traumatología.

var fonasa = document.getElementById("fonasa")
var previsionFonasa = traumatologiaTotal.filter(function(f){
    return f.prevision == "FONASA";                            // la propiedad del elemento a buscar.
    });
    console.log(previsionFonasa)
    previsionFonasa.forEach((f) => {
        fonasa.innerHTML += ` <p> ${f.paciente} - ${f.prevision} </p>`
    })
    

    // var dental = consultaDental
    // function mpPrevision(e){
    //     $("div").html("").("titulo en h1")
    //     e.forEach((e) =>{
    //         $("div").append(`
    //         <p>
    //         ` )
    //     })
    // }