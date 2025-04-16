import { Conta } from "../Conta";

export class ContaSalario extends Conta{
    constructor(){
        super(0,this._cliente, 100)
    }
}
