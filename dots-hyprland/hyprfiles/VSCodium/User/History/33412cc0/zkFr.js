import { Conta } from "../Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0,cliente, 100);
    }

    sacar(valor) {
        const taxa = 1.01;  // Define a taxa de saque
        return this._sacar(valor, taxa);  // Passa valor e taxa para o método _sacar
    }
}