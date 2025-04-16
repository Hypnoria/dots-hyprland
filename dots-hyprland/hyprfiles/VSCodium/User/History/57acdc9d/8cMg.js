import { funcionario } from "./Funcionario.js";

export class Diretor extends funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf)
    }
}