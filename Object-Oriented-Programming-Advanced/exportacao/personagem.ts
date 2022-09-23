export class Personagem{

 vidas: number;

    andar(){
        console.log(`Estou andando e tenho ${interacao.vidas} vidas agora`)
    }
    Falar(){
        console.log(`Estou falando e tenho ${interacao.vidas} vidas agora`)
    }
}
const interacao = new Personagem();
interacao.vidas =3;

interacao.Falar();
interacao.andar();