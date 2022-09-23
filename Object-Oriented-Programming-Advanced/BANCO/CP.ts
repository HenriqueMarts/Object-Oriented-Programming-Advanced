export {Poupanca}
import {cliente} from "./User"
import { User } from "./User"

class Poupanca extends User {
    mostrarsCP(){
        console.log(`Saldo CP: ${cliente.sPoupanca} Reais`)}}

var cc = new Poupanca();
cc.mostrarsCP()