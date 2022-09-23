export class Paciente{
    nome: string;
    idade: number;
    peso: number;
    servico: string;
}
export var paciente = new Paciente();
paciente.nome = "Reginaldo dos Santos";
paciente.idade = 38;
paciente.peso = 65.9;
paciente.servico = "Dermatolista"