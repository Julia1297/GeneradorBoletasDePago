var ModeloDeRespuestaEmpleado = require("../../ModeloDeRespuesta/ModeloDeRespuestaEmpleado").ModeloDeRespuestaEmpleado;
class PresentadorObtenerEmpleados {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(this.noHayEmpleados(mensaje))
            return "No hay empleados";
        return this.prepararFormato(mensaje);
    }
    noHayEmpleados(listaDeEmpleados) {
        return listaDeEmpleados.length == 0;
    }
    prepararFormato(empleados) {
        var listaEmpleadosConFormato = []
        empleados.forEach((empleado) => {
            listaEmpleadosConFormato.push(this.prepararFormatoEmpleado(empleado));
        });
        return listaEmpleadosConFormato;
    }
    prepararFormatoEmpleado(empleado) {
        return  ModeloDeRespuestaEmpleado(empleado);
    }
   
}

module.exports = { PresentadorObtenerEmpleados }

