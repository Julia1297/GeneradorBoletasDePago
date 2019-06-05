var GeneradorBoletasDePago = require("../../ReglasDeNegocioEmpresa/GeneradorBoletas/GeneradorBoletasPago").GeneradorBoletasDePago;
class GenerarBoletasInteractor {
    constructor(repositorioBoleta, repositorioEmpleado) {
        this.repositorioBoleta = repositorioBoleta;
        this.listaEmpleados =  repositorioEmpleado.obtenerEmpleados();
    }
    generarBoleta()
    {
        var generadorBoletasDePago = new GeneradorBoletasDePago(this.listaEmpleados);
        var listaDeBoletas = generadorBoletasDePago.generarBoletasDePagoParaTodosLosEmpleados();
        return  this.repositorioBoleta.generarBoleta(listaDeBoletas);
    }
}

module.exports = { GenerarBoletasInteractor: GenerarBoletasInteractor }