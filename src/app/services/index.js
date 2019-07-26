import angular from "angular";
import ClienteService from "./cliente.service"
import ItemService from "./item.service"
import OsService from "./os.service"

export default angular 
    .module("services", [])
    .service("clienteService", ClienteService)
    .service("itemService", ItemService)
    .service("osService", OsService).name