export class SistemaAuth {
    static login(autenticavel, senha) {
        if (SistemaAuth.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha); 
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && 
               typeof autenticavel.autenticar === "function"; 
    }
}
