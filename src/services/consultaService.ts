import type { Consulta } from "../interfaces/consulta.js";
import type { StatusConsulta } from "../types/statusConsulta.js";

/** Atividade 1 - Lista consultas filtradas por status */
export function listarConsultasPorStatus(
  consultas: Consulta[],
  status: StatusConsulta
): Consulta[] {
  return consultas.filter((consulta) => consulta.status === status);
}

/** Atividade 2 - Lista consultas com data igual ou posterior a hoje */
export function listarConsultasFuturas(consultas: Consulta[]): Consulta[] {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return consultas.filter((consulta) => consulta.data >= hoje);
}

/** Altera o status de uma consulta (retorna nova instância imutável) */
export function alterarStatusConsulta(
  consulta: Consulta,
  status: StatusConsulta
): Consulta {
  return {
    ...consulta,
    status,
  };
}

/** Atividade 5 - Calcula o faturamento total das consultas realizadas */
export function calcularFaturamento(consultas: Consulta[]): number {
  return consultas
    .filter((consulta) => consulta.status === "realizada")
    .reduce((total, consulta) => total + consulta.valor, 0);
}
