import { Conta } from "../Conta.js ";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }
    
    sacar(valor) {
        const taxa = 1.02;  // Adicionando ponto e vírgula
        return this._sacar(valor, taxa);
    }
    
}


