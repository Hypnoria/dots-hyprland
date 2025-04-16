import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAuth } from "./SistemaAuth.js";

// Criando contas
const diretor = new Diretor("Pedro", 10000, "111222333-44");
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Pedro", 10000, "222333444-55");
gerente.cadastrarSenha("123456789");

const cliente = new Cliente("Pedro", "333444555-66", "456");

// Verificando login
const diretorestaLogado = SistemaAuth.login(diretor, "123456789");
const gerenteestaLogado = SistemaAuth.login(gerente, "123456789");
const clienteestaLogado = SistemaAuth.login(cliente, "456");

console.log(diretorestaLogado, gerenteestaLogado, clienteestaLogado); // Deve exibir: true true true
