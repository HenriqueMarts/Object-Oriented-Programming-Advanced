export {Total}
import {cliente} from "./User"
import { User } from "./User"

class Total extends User {
    mostrarsTT(){
        console.log(`Saldo Total: ${cliente.sTotal} Reais`)}}

var cc = new Total();
cc.mostrarsTT()