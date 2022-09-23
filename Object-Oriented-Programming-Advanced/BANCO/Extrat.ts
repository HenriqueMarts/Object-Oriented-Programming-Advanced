export {Extrat}
import {cliente} from "./User"
import { User } from "./User"

class Extrat extends User {
    mostrarsEx(){
        console.log(
       `             Extrato em Reais
       Nome:                     ${cliente.nomeCliente}
       Ativo:                    ${cliente.ativo}
       Saldo CC:                 ${cliente.sCorrente}
       Saldo CP:                 ${cliente.sPoupanca}
       Saldo Aut. para retirada: ${cliente.sTotal}
       Saldo Invest:             ${cliente.sInvest}
       Extrat Total:             ${cliente.extrat}`)}}

var cc = new Extrat();
cc.mostrarsEx()