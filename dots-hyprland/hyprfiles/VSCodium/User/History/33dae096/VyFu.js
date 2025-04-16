import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";

const diretor = new Diretor("Pedro", 10000, 111222333-44);
const gerente = new Gerente("Pedro", 10000, 111222333-44);

const estaLogado = SistemaAuth.login(diretor, "123456789");

console.log(estaLogado)
