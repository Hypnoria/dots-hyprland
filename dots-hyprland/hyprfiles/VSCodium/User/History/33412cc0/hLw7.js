import { Conta } from "../Conta.js";

export class ContaSalario extends Conta{
    constructor(){
        super(0,cliente, 100);
    }
    
    sacar(valor){
        const taxa = 1.01
        return this._sacar();
    }
}
