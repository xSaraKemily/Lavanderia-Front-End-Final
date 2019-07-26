export default class ListController {
    constructor($state, clienteService){
        this.records = [];
        this._$state = $state;
        this._clienteService = clienteService;
        this.findAll();
        this.cols = [
            {
                label:"Documento",
                value: "documento",
                type:"text"
            },
            {
                label:"Nome",
                value:"nome",
                type:"text"
            },
            {
                label:"Telefone",
                value:"telefone",
                type:"texte"
            },
            {
                label:"E-mail",
                value: "email",
                type: "text"
            }
        ];
    }

    buscar(pesquisa){
        this.records = [];
        this.findByPesquisa(pesquisa);
    }
    findByPesquisa(pesquisa){
        return this._clienteService.findByPesquisa(pesquisa)
        .then(response =>{
            this.records = response;
            return this.records;
        });
    }
    findAll(){
        return this._clienteService.findAll()
        .then(response=>{
            this.records = response;
            return this.records;
        });
    }
    async excluir(id){
        await this._clienteService.remove(id)  /*vai esperar aqui ate o banco responder a remoção*/
        this._$state.reload();                    /*vai dar reload na tela e fazer o constructor dnv*/
    }
}
ListController.$inject=["$state", "clienteService"]