import angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import diretivas from "./diretivas";
import services from "./services";

import { mainConfig } from "./main/config";
import {clienteConfig} from './clientes/config';
import {itemConfig} from './itens/config';
import {ordemConfig} from './ordem/config'

export default angular
  .module("app", [uiRouter, diretivas, services])
  .config(mainConfig)
  .config(clienteConfig)
  .config(itemConfig)
  .config(ordemConfig)
  .name;
