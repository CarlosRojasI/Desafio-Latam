// ES6
// import operaciones from './operaciones'

// ES5
const Operaciones = require('./operaciones.js')

const op = new Operaciones()


function calcular(operacion, n1, n2) {
  if (operacion == "suma") console.log(op.suma(n1, n2));
  if (operacion == "resta") console.log(op.resta(n1, n2));
  if (operacion == "multiplicacion") console.log(op.multiplicacion(n1, n2));
  if (operacion == "division") console.log(op.division(n1, n2));
}

calcular("resta", 10, 5);
