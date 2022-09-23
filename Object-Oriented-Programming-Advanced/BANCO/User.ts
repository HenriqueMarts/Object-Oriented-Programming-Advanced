export {cliente}
export class User{
 nomeCliente:string; 
 sCorrente:number;
 sPoupanca:number;
 sTotal:number;
 sInvest:number;
 ativo:boolean;
 extrat:number;
}

 var cliente = new User;
 cliente.nomeCliente = "Rogerinho das Couves"
 cliente.sCorrente = 10000;
 cliente.sPoupanca = 5000;
 cliente.sTotal = cliente.sCorrente + cliente.sPoupanca
 cliente.sInvest = cliente.sTotal*0.1
 cliente.extrat = cliente.sInvest + cliente.sPoupanca + cliente.sCorrente
 cliente.ativo = true











