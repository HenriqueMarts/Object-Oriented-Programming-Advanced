export {Invest}
import {cliente} from "./User"
import { User } from "./User"

class Invest extends User {
    mostrarsInvest(){
        console.log(`Saldo Investido: ${cliente.sInvest} Reais`)}}

var cc = new Invest();
cc.mostrarsInvest()