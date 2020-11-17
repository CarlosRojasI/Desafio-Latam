class Impuestos {
    constructor(monto_bruto_anual,deducciones){
        this.monto_bruto_anual = monto_bruto_anual
        this.deducciones = deducciones
    }
}

const Operacion = function (monto_bruto_anual,deducciones){
    return ((this.monto_bruto_anual - this.deducciones) * 0.21);

};
    


module.exports = Operacion;
