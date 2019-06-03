var EmpleadoFactory = require("../../ReglasDeNegocioEmpresa/Empleado/EmpleadoFactory").EmpleadoFactory;

class CrearEmpleado {
    constructor(repositorio, datosEmpleado) {
        this.repositorio = repositorio;
        this.datosEmpleado = datosEmpleado;
    }
    crearEmpleadoNuevo()
    {
        var empleado = new EmpleadoFactory(this.datosEmpleado);
        return  this.repositorio.insertarEmpleado(empleado);
    }
}

module.exports = { CrearEmpleado: CrearEmpleado }