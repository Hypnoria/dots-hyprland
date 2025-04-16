export class Cliente {
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf; // Inicializa _cpf diretamente no construtor
        this._senha = senha;
    }

    get cpf() {
        return this._cpf; // Retorna o valor armazenado em _cpf
    }
}
