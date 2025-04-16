 export class SistemaAuth{
    static login(autenticavel, senha){
        if(SistemaAuth.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar == senha;
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
         autenticavel.autenticar instanceof function
    } 
 }