const Agregar = function (nombreEmpresa){
    return nombreEmpresa;

};

class Cliente {
    constructor(nombreEmpresa,nombreCliente){
    this.nombreCliente = nombreCliente;
  }

  getAgregarCliente (nombreCliente) {
    this.nombreCliente = nombreCliente;
  };

  setImpuesto (impuesto){
      this.impuesto = impuesto;
  }
}

    let cliente1 = new Cliente();   // duda de donde llega
   cliente1.setAgregarCliente("");   // duda de donde llega

module.exports = Agregar;