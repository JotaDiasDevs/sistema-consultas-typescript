import { listarConsultasPorStatus, listarConsultasFuturas, alterarStatusConsulta, calcularFaturamento, } from "./services/consultaService.js";
// Especialidades
const cardiologia = {
    id: 1,
    nome: "Cardiologia",
};
const ortopedia = {
    id: 2,
    nome: "Ortopedia",
    descricao: "Tratamento de ossos e articulações",
};
const pediatria = {
    id: 3,
    nome: "Pediatria",
};
// Médicos
const medico1 = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
};
const medico2 = {
    id: 2,
    nome: "Dra. Ana Paula Costa",
    crm: "CRM54321",
    especialidade: ortopedia,
    ativo: true,
};
const medico3 = {
    id: 3,
    nome: "Dr. João Mendes",
    crm: "CRM98765",
    especialidade: pediatria,
    ativo: true,
};
// Pacientes
const paciente1 = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
};
const paciente2 = {
    id: 2,
    nome: "Maria Silva",
    cpf: "987.654.321-00",
    email: "maria@email.com",
    telefone: "(11) 98765-4321",
};
const paciente3 = {
    id: 3,
    nome: "Pedro Santos",
    cpf: "456.789.123-00",
    email: "pedro@email.com",
};
function criarConsulta(id, medico, paciente, data, valor) {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agendada",
    };
}
function confirmarConsulta(consulta) {
    return {
        ...consulta,
        status: "confirmada",
    };
}
function cancelarConsulta(consulta) {
    if (consulta.status === "realizada") {
        return null;
    }
    return {
        ...consulta,
        status: "cancelada",
    };
}
function exibirConsulta(consulta) {
    const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return `
  Consulta #${consulta.id}
  Médico: ${consulta.medico.nome}
  Paciente: ${consulta.paciente.nome}
  Especialidade: ${consulta.medico.especialidade.nome}
  Data: ${consulta.data.toLocaleDateString("pt-BR")}
  Valor: ${valorFormatado}
  Status: ${consulta.status}
  `;
}
// Atividade 3 - Array tipado de Consultas
const consultas = [];
// Consultas base
const consulta1 = criarConsulta(1, medico1, paciente1, new Date(2025, 2, 19), // 19/03/2025
350);
const consulta2 = criarConsulta(2, medico2, paciente2, new Date(2025, 1, 10), // 10/02/2025 (passada)
200);
const consulta3 = criarConsulta(3, medico3, paciente3, new Date(2025, 4, 15), // 15/05/2025 (futura)
500);
const consulta4 = criarConsulta(4, medico1, paciente2, new Date(2025, 5, 20), // 20/06/2025 (futura)
150);
const consulta5 = criarConsulta(5, medico2, paciente1, new Date(2025, 2, 5), // 05/03/2025 (passada)
400);
// Atividade 4 - Alterar status utilizando alterarStatusConsulta
consultas.push(alterarStatusConsulta(consulta1, "confirmada"), alterarStatusConsulta(consulta2, "realizada"), alterarStatusConsulta(consulta3, "cancelada"), alterarStatusConsulta(consulta4, "agendada"), alterarStatusConsulta(consulta5, "realizada"));
// Exibição
const primeiraConsulta = consultas[0];
if (primeiraConsulta) {
    console.log("=== CONSULTA CONFIRMADA ===");
    console.log(exibirConsulta(primeiraConsulta));
}
console.log("\n=== CONSULTAS POR STATUS (realizada) ===");
const realizadas = listarConsultasPorStatus(consultas, "realizada");
realizadas.forEach((c) => console.log(exibirConsulta(c)));
console.log("\n=== CONSULTAS FUTURAS ===");
const futuras = listarConsultasFuturas(consultas);
futuras.forEach((c) => console.log(exibirConsulta(c)));
const faturamento = calcularFaturamento(consultas);
console.log(`\n=== FATURAMENTO ===\nTotal: ${faturamento.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
})}`);
//# sourceMappingURL=index.js.map