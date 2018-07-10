import { Component } from '@angular/core';
import { Team } from './models/team';
import { Placar } from './models/placar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //private a : number = 0;
  //private b : number = 1;

  private placares : Placar[] = [];
  private batalhas : any[] = [];
  private ordem : number = 0;

  timeA : Placar;
  timeB : Placar;

  terminou : boolean = false;

  constructor(){

      
    this.placares.push(new Placar({id: 1, nome: "Narcos", img : "https://cdn.movieweb.com/img.albums/TVaXFFkCydQIeg_1_200/Narcos.jpg"}));

    this.placares.push(new Placar({id: 3, nome: "Black Mirror", img : "http://s1.dmcdn.net/ooyMb/200x200-URG.jpg"}));

    this.placares.push(new Placar({id: 1, nome: "Orange is the new Black", img : "https://i0.wp.com/therumpus.net/wp-content/uploads/2016/07/OINTBfeature.jpg?resize=200%2C200"}));
    
    
    this.placares.push(new Placar({id: 1, nome: "13 Reasons Why", img : "http://i0.kym-cdn.com/entries/icons/original/000/022/761/200x200bb.png"}));
    
    this.placares.push(new Placar({id: 3, nome: "Punisher", img : "http://static1.purebreak.com.br/articles/5/63/17/5/@/249898--o-justiceiro-ganha-data-de-estreia-se-200x200-2.jpg"}));
    this.placares.push(new Placar({id: 3, nome: "House of Cards", img : "https://qph.fs.quoracdn.net/main-thumb-t-320628-200-f6SjTgotftlgOdCqk2wN0StpV8yk3kmE.jpeg"}));
    this.placares.push(new Placar({id: 4, nome: "La Casa de Papel", img : "https://qph.fs.quoracdn.net/main-thumb-t-3461043-200-vlujyvipwvxdftuhvpekyuzsknfaexck.jpeg"}));
   
    this.placares.push(new Placar({id: 4, nome: "Stranger Things", img : "http://static1.purebreak.com.br/articles/2/37/51/2/@/180927-de-stranger-things-veja-o-que-ira-aco-200x200-2.png"}));
    
    this.placares.push(new Placar({id: 4, nome: "Daredevil", img : "https://cdn.movieweb.com/img.albums/TV1d5lcVJrPh47_2_200/Marvels-Daredevil.jpg"}));

  }

  ngOnInit(){
    console.log(this.placares);
    this.comeca();
   
  }

  comeca(){
    this.gerarLista();

    this.ordem = 0;    

    this.mostraBatalha();
  }

  gerarLista(){

    var lst = [];
    for(var i = 0 ; i < this.placares.length; i++){
      for(var j = i+1; j < this.placares.length; j ++){

        let a, b;
        if(this.randomNumber() == 1){
          a = i;
          b = j;
        }
        else{
          a = j;
          b = i;
        }

        lst.push({a , b}); 
      }
    }

    this.batalhas = this.shuffle(lst);

    console.log(this.batalhas.length);

   
  }

  mostraBatalha(){

    this.timeA = this.placares[this.batalhas[this.ordem].a];
    this.timeB = this.placares[this.batalhas[this.ordem].b];

  //  console.log(this.timeA.time.nome+" x "+this.timeB.time.nome);

  }

  venceA(){
    this.timeA.venceu();
    this.timeB.perdeu();

    this.proximo();
  }

  venceB(){
    this.timeB.venceu();
    this.timeA.perdeu();

    this.proximo();
  }

  empate(){
    this.timeA.empate();
    this.timeB.empate();

    this.proximo();
  }

  mostraPontuacao(){

    this.placares.sort((a, b) => {
      return b.pontuacao - a.pontuacao;
    });
    /*this.placares.map((placar) =>{
      console.log(placar.time.nome +" "+placar.empates+" "+placar.derrotas+" "+placar.vitorias+" "+ placar.pontuacao );
    });*/
  }

  proximo(){
   /* this.b ++;
    if(this.b >= this.placares.length){
      this.b = this.a + 2;

      if(this.b >= this.placares.length){
        this.termina();
        return;
      }

      this.a ++;
    }*/

    this.ordem ++;

    if(this.ordem == this.batalhas.length){
      this.termina();
      return;
    }
      

    this.mostraBatalha();
  }

  termina(){
    this.terminou = true;
    this.mostraPontuacao();
    console.log("Terminou a batalha");
  }

  randomNumber(){
    return Math.floor((Math.random() * 2) + 1);
  }

  shuffle(a) {  
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }


}
