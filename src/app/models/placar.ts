import { Team } from "./team";

export class Placar {
  // time : Team;
   private points : number;
   private vit : number;
   private der : number;
   private emp : number;

   constructor(public time: Team){
      this.points = 0;
      this.vit = 0;
      this.der = 0;
      this.emp = 0;
   }

   venceu(){
      this.points += 3;
      this.vit ++;
   }

   perdeu(){
      this.points += 0;
      this.der ++;
   }

   empate(){
      this.points += 1;
      this.emp ++;
   }

   get vitorias(){
      return this.vit;
   }

   get derrotas(){
      return this.der;
   }

   get empates(){
      return this.emp;
   }

   get pontuacao(){
      return this.points;
   }
}
