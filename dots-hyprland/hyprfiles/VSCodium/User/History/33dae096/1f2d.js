import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./Contacorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


 
// Criação do cliente
const cliente1 = new Cliente("Pedro", 11122233309);

// Criação das contas
const contaCorrentePedro = new contaCorrente(0, cliente1, 0);
const ContaPoupancaPedro = new ContaPoupanca(50, cliente1, 0);
const ContaSalario = new ContaSalario(50, cliente1, 0)
// const conta = new Conta(0, cliente1, 1001);

// Realiza a transferência e saques
contaCorrentePedro.depositar(500); // Primeiro depositando para ter saldo
contaCorrentePedro.sacar(100);

ContaSalario.sacar(50);


