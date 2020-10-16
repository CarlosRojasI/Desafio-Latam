
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

/////  Primer caso 

// const cuerpo = document.getElementById("cuerpo")

// for(consulta of consultaDental){
//     cuerpo.innerHTML += `
//     <tr>
//         <td>${consulta.hora}</td>
//         <td>${consulta.especialista}</td>
//         <td>${consulta.paciente}</td>
//         <td>${consulta.rut}</td>
//         <td>${consulta.prevision}</td>

//     </tr>
//     `
// }

/////  Segundo caso  /////


var longitudArreglo = consultaDental[consultaDental.length -1]

document.getElementById('parrafo-dental').innerHTML = `El primer paciente del dia fue: ${consultaDental[0].paciente} su prevision fue ${consultaDental[0].prevision}, el ultimo paciente fue ${longitudArreglo.paciente} y su previsoón es: ${longitudArreglo.prevision}  `

///////////////////////////
/////  Segundo caso  /////
//////////////////////////

var traumatologiaTotal = traumatologia.concat(traumatologiaNuevosIngresos)
console.log(traumatologiaTotal)

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


// Por medio de Método Pop y Shift elimino a los usuarios de la tabla radiologia primero y ultimo

var longitudRadiologia = radiologia[radiologia.length -1]

radiologia.pop();
console.log(radiologia);

radiologia.shift();


document.getElementById('parrafo-radio').innerHTML = `El primer paciente dado de alta es: ${radiologia[0].paciente} y el último de la lista es ${longitudRadiologia.paciente} `


//// paso 3 iterar la base de dental para obtener un join de sus elementos unidos por un guion

var pruebaDental = document.getElementById("prueba-dental")
console.log(pruebaDental)

consultaDental.forEach((e) => {
    pruebaDental.innerHTML += 
    `<p> ${e.hora} - ${e.especialista} - ${e.paciente} - ${e.rut} - ${e.prevision} </p> `
});




// consultaDental.forEach((r) => {
// cuerpo.innerHTML +=
// `
//     <tr>
//         <td>${r.hora}</td>
//         <td>${r.especialista}</td>
//         <td>${r.paciente}</td>
//         <td>${r.rut}</td>
//         <td>${r.prevision}</td>
// `
//     ;
// });



// 




//  paso 4


var todos = traumatologiaTotal.concat(radiologia.concat(consultaDental))
console.log(todos)

var cajaTodos = document.getElementById("todos")
todos.forEach((e) => {
    cajaTodos.innerHTML += 
    `<p> ${e.paciente} </p> `
});


//  paso 5 filter

var isapre = document.getElementById("isapre")
var prevision = consultaDental.filter(function(e){
    return e.prevision == "ISAPRE";
    });

    prevision.forEach((e) => {
        isapre.innerHTML += ` <p> ${e.paciente} - ${e.prevision} </p>`
    })
    


//  paso 6


var fonasa = document.getElementById("fonasa")
var previsionFonasa = traumatologiaTotal.filter(function(f){
    return f.prevision == "FONASA";                            // la propiedad del elemento a buscar.
    });
    console.log(previsionFonasa)
    previsionFonasa.forEach((f) => {
        fonasa.innerHTML += ` <p> ${f.paciente} - ${f.prevision} </p>`
    })
    
