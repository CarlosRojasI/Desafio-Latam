const suma = require("./operaciones/suma");
const resta = require("./operaciones/resta");
const multiplicacion = require("./operaciones/multiplicacion");
const division = require("./operaciones/division");

class Operaciones {
  suma(n1, n2) {
    return suma(n1, n2);
  }
  resta(n1, n2) {
    return resta(n1, n2);
  }
  multiplicacion(n1, n2) {
    return multiplicacion(n1, n2);
  }
  division(n1, n2) {
    return division(n1, n2);
  }
}

// ES5
module.exports = Operaciones;

// ES6
// export default op
