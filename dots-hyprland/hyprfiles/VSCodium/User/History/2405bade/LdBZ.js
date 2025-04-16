 export class SistemaAuth{
    static login(autenticavel, senha){
        return autenticavel.autenticar == senha;
    }
 }