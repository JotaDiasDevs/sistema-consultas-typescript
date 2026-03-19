import type { Consulta } from "../interfaces/consulta.js";
import type { StatusConsulta } from "../types/statusConsulta.js";
/** Atividade 1 - Lista consultas filtradas por status */
export declare function listarConsultasPorStatus(consultas: Consulta[], status: StatusConsulta): Consulta[];
/** Atividade 2 - Lista consultas com data igual ou posterior a hoje */
export declare function listarConsultasFuturas(consultas: Consulta[]): Consulta[];
/** Altera o status de uma consulta (retorna nova instância imutável) */
export declare function alterarStatusConsulta(consulta: Consulta, status: StatusConsulta): Consulta;
/** Atividade 5 - Calcula o faturamento total das consultas realizadas */
export declare function calcularFaturamento(consultas: Consulta[]): number;
//# sourceMappingURL=consultaService.d.ts.map