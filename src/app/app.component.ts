import { Component, OnInit, HostListener } from '@angular/core';
import { IBola } from './bola.interface';
import { BolaSorteo,randomAnimation } from './app.animations';
import { range, of } from 'rxjs';
import { concatMap, map, delay, last} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  animations:[BolaSorteo,randomAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bingo';
  sorteando:boolean=false;
  controles:boolean=false;
  mostrarBola:boolean=false;
  numeroBola:number=null;
  animando:number=null;
  constructor(){

  }
  ngOnInit(){
    //setInterval(()=>this.animando = parseInt(`${Math.random()*75}`) + 1, 500 )
  }
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
    // do something meaningful with it
    switch (ev.keyCode) {
      case 32:
        this.sortear();
        break;
      case 82:
        this.controles=!this.controles;
        break;
      
      default:
        console.log('loquesea')
        break;
    }
  }
  newGameSet=():IBola[]=>(new Array(75)).fill(0).map((a,i)=>{
    return {
      number:i + 1, 
      estado:false
    }
  });
  inicializar(){

  }

  ocultarSorteo(){
    this.mostrarBola = false;
  }
  terminado=():boolean=> !this.bolas.filter(e=>!e.estado).length
  getRandom(sorteado:boolean=false):number{
    let x = parseInt(`${Math.random() * 75}`) + 1
    if(!sorteado && !this.terminado() && !!this.bolas.filter(b=>b.number==x && b.estado).length)
      return this.getRandom(sorteado);
    return x;
  }
  sortear(){
    if(this.terminado()) 
      return;
    if(this.sorteando) 
      return;
    if(this.mostrarBola)
      return this.ocultarSorteo();
    this.animando = null;
    this.mostrarBola = true;
    this.sorteando = true;
    range(1, 30).pipe(
      concatMap(i => of(i).pipe(delay((3 * i)))),
      map(i=>{
        let x = this.getRandom();
        this.numeroBola = x;
        return x
      }),
      last(),
      delay(200)
    ).subscribe(number => {
      this.animando = number;
      this.seleccionar({number})
      this.sorteando=false;
    });
  }

  seleccionar = (bola:IBola) => this.bolas = this.bolas.map(e=>{
    if(e.number == bola.number) 
      e.estado = true;
    return e;
  });
  resetear = () => this.bolas = this.newGameSet();
  get bolas():IBola[]{
    let bolas = JSON.parse(localStorage.getItem('bolas'))
    if(!bolas || !Array.isArray(bolas) || bolas.length!=75)
      this.bolas = this.newGameSet();
    bolas = JSON.parse(localStorage.getItem('bolas'))
    return bolas;
  }
  set bolas(bolas:IBola[]){
    localStorage.setItem('bolas',JSON.stringify(bolas));
  }
}
