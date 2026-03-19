import type { Medico } from "./medico.js";
import type { Paciente } from "../types/paciente.js";
import type { StatusConsulta } from "../types/statusConsulta.js";
export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}