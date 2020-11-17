import cliente from "./cliente.js"
import impuesto from "./impuestos.js"

const cliente = new Cliente();
const impuesto = new impuesto();

cliente.setNombre("XYZ")

impuesto.setMonto_bruto_anual(200);
impuesto.setDeducible(50)

console.log(impuesto.getMonto_buto_anual);
console.log(impuesto.getDeducible);

console.log(cliente.getNombre());
console.log(cliente.calucularImpuesto())




// class Empresa {
//     constructor(nombreEmpresa){
//     this.nombreEmpresa = this.nombreEmpresa;
//     this.cliente = []
//   }

//     getCliente () {
//     return this.nombreEmpresa;
//   };

//     agregarCliente (clientenuevo) {
//     this.cliente.push(clientenuevo);
//   };
// }


