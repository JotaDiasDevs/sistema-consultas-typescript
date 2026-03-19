/** Atividade 1 - Lista consultas filtradas por status */
export function listarConsultasPorStatus(consultas, status) {
    return consultas.filter((consulta) => consulta.status === status);
}
/** Atividade 2 - Lista consultas com data igual ou posterior a hoje */
export function listarConsultasFuturas(consultas) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return consultas.filter((consulta) => consulta.data >= hoje);
}
/** Altera o status de uma consulta (retorna nova instância imutável) */
export function alterarStatusConsulta(consulta, status) {
    return {
        ...consulta,
        status,
    };
}
/** Atividade 5 - Calcula o faturamento total das consultas realizadas */
export function calcularFaturamento(consultas) {
    return consultas
        .filter((consulta) => consulta.status === "realizada")
        .reduce((total, consulta) => total + consulta.valor, 0);
}
//# sourceMappingURL=consultaService.js.map