import {Patinete} from "./patinete"
import {patinete} from "./patinete" 

class Carac {
    mostrar(){
        console.log(`
        Informações do Veiculo
        Modelo: ${patinete.marca}
        Cor: ${patinete.cor}
        Número de rodas: ${patinete.qtdRodas}
        Velocidade máxima: ${patinete.velocidade}km
        `)
    }
}
var p = new Carac;
p.mostrar();