const ModeloDeRespuestaEmpleado = (empleado) => {
    return ({
        "nombre": empleado.nombre,
        "ci": empleado.ci,
        "salario": empleado.calculadora.salario,
        "montoPorHora": empleado.calculadora.montoPorHora,
        "comision": empleado.calculadora.porcentajeComision,
        "metodosDeNotificacion": empleado.metodosDeNotificacion,
        "salarioBase": empleado.calculadora.salarioBase,
        "fechaInicioLaboral": empleado.calculadora.fechaInicioTrabajo,
        "perteneceASindicato": empleado.perteneceASindicato?"SI":"NO",
    })
}
module.exports = { ModeloDeRespuestaEmpleado }