export class Conta{
    constructor(tipo, saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo;
        if(this.contructor == Conta) {
            console.log("Voce nao deveria criar um objeto do tipo conta")
        }
    }  


    sacar(valor) {
        let taxa = 1
}

    _sacar(valor, taxa) {
    const valorSacado = valor - taxa;
    if (this._saldo >= valorSacado && valor > 0) {
        this._saldo -= valorSacado; 
        return valorSacado;  
    }
    return null;  
}


    // Método para depositar
    depositar(valor) {
        if (valor <= 100) {
            console.log("Valor inválido para depósito");
            return;  // Não permite depósito de valor negativo ou zero
        }
        this._saldo += valor;
    }

    // Método para transferir
    transferir(valor, contaDestino) {
        const valorSacado = this.sacar(valor);
        if (valorSacado !== null) {
            contaDestino.depositar(valorSacado);  // Realiza o depósito na conta destino
        } else {
            console.log("Saldo insuficiente para transferir");
        }
    }
}