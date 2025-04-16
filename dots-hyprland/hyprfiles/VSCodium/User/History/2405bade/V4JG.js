 export class SistemaAuth{
    static login(autenticavel, senha){
        if(SistemaAuth.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar == senha;
        }

    }
 }