class Impuestos {
    constructor(monto_bruto_anual,deducciones){
        this.monto_bruto_anual = monto_bruto_anual
        this.deducciones = deducciones
    }
getMonto_bruto_anual(){
    return this.monto_bruto_anual;
}
setMonto_bruto_anual(monto_bruto_anual) {
    this.monto_bruto_anual = monto_bruto_anual
}

getDeducciones() {
    return this.getDeducciones;
}
set Deduciones(deduciones) {
    this.deducciones = deduciones
}


}