export default class ListController {
    constructor($state, itemService){
        this.records = [];
        this._$state = $state;
        this._itemService = itemService;
        this.findAll();
        this.cols = [
            {
                label:"Descrição",
                value: "descricao",
                type:"text"
            },
            {
                label:"Valor",
                value:"valor",
                type:"number"
            },
        ];
    }

    buscar(pesquisa){
        this.records = [];
        this.findByPesquisa(pesquisa);
    }
    findByPesquisa(pesquisa){
        return this._itemService.findByPesquisa(pesquisa)
        .then(response =>{
            this.records = response;
            return this.records;
        });
    }
    findAll(){
        return this._itemService.findAll()
        .then(response=>{
            this.records = response;
            return this.records;
        });
    }
    async excluir(id){
        await this._itemService.remove(id)  /*vai esperar aqui ate o banco responder a remoção*/
        this._$state.reload();                    /*vai dar reload na tela e fazer o constructor dnv*/
    }
}
ListController.$inject=["$state", "itemService"]