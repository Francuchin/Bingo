import { Component, OnInit, Input } from '@angular/core';
import { IBola } from '../bola.interface';

@Component({
  selector: 'app-bola',
  templateUrl: './bola.component.html',
  styleUrls: ['./bola.component.scss']
})
export class BolaComponent implements OnInit {
  @Input('bola') bola:IBola; 

  constructor() { }

  ngOnInit() {
  }
  public sortear(){
    this.bola.estado = true;
  }
}
