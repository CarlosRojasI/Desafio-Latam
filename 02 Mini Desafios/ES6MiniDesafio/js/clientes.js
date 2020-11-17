const Agregar = function (nombre){
    return nombre;

};


class Cliente {
    constructor(nombre){
    this.nombre = nombre;
  }

  setAgregarCliente (nombre) {
    this.nombre = nombre;
  };

  setImpuesto (impuesto){
      this.impuesto = impuesto;
  }
}

    let cliente1 = new Cliente();   // duda de donde llega
   cliente1.setAgregarCliente("");   // duda de donde llega

module.exports = Agregar;