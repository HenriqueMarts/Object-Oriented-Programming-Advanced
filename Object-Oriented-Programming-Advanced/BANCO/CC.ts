export {Corrente}
import {cliente} from "./User"
import { User } from "./User"

class Corrente extends User {
    mostrarsCC(){
        console.log(`Saldo CC: ${cliente.sCorrente} Reais`)}}

var cc = new Corrente();
cc.mostrarsCC()
