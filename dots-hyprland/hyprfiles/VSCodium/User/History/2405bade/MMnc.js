 export class SistemaAuth{
    static login(funcionario, senha){
        return funcionario.senha == senha;
    }
 }