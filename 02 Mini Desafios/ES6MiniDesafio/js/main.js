class Empresa {
    constructor(nombre){
    this.nombre = nombre;
    this.cliente = []
  }

    getCliente () {
    return this.cliente;
  };

    agregarCliente (clientenuevo) {
    this.cliente.push(clientenuevo);
  };
}

  const Clientes = require('clientes.js')
  const clientes = new Clientes()
  const Impuesto = require('impuesto.js')
  const op = new Impuesto()
  
  main();
