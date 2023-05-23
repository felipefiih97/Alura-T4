/* Ser autenticavel significa ter o método autenticar( )
*/

export class SistemaAutenticacao{
    // abaixo eu tenho um membro estático que só pode ser acessado diretamente pela classe .
    static login(autenticavel,senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){

            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function 
    }
}
