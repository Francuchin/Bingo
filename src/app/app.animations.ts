import { trigger, sequence, state, animate, transition, style,query,stagger ,group} from '@angular/animations';

export const BolaSorteo = 
  trigger('BolaSorteo', [
    state('in', style({opacity:1})),
    transition(':enter', [
      query('.bola-wrap',[
        animate('0ms', style({ transform: 'scale(.8) translateY(100%)', 'box-shadow':'0px 0px 10px 0px #00000000',opacity:1})),
        animate('150ms', style({ transform: 'scale(1.01)', 'box-shadow':'0px 0px 10px 0px #00000029',opacity:1})),
        animate('160ms', style({ transform: 'scale(1)', 'box-shadow':'0px 0.5px 10px 0px #00000029',opacity:1})),
        animate('165ms', style({ transform: 'scale(1.005)', 'box-shadow':'0px 0px 10px 0px #00000029',opacity:1})),
        animate('170ms', style({ transform: 'scale(1) translateY(0px)', 'box-shadow':'0px 0.5px 10px 0px #00000029',opacity:1}))
      ])
    ]),
    transition(':leave', [
      query('.bola-wrap',[
        animate('0ms', style({ transform: 'scale(1)', 'box-shadow':'0px 0.5px 10px 0px #00000029',opacity:1})),
        animate('25ms', style({ transform: 'scale(.95) translateY(0%)', 'box-shadow':'0px 0.5px 10px 0px #00000000',opacity:.5})),
        animate('75ms', style({ transform: 'scale(.9) translateY(40%)', 'box-shadow':'0px 0.5px 10px 0px #00000000',opacity:.5})),
        animate('110ms', style({ transform: 'scale(.85) translateY(50%)', 'box-shadow':'0px 0.5px 10px 0px #00000000',opacity:.0}))
      ])
    ])
  ])
export const randomAnimation = 
  trigger('randomAnimation', [
    transition('* => mostrar', [
      animate('0ms',style({transform: 'scale(1)'})),
      animate('100ms',style({transform: 'scale(.95)'})),
      animate('150ms',style({transform: 'scale(1.05)'})),
      animate('200ms',style({transform: 'scale(.90)'})),
      animate('250ms',style({transform: 'scale(.95)'})),
      animate('290ms',style({transform: 'scale(1.1)'})),
      animate('320ms',style({transform: 'scale(.96)'})),
      animate('340ms',style({transform: 'scale(1.03)'})),
      animate('345ms',style({transform: 'scale(1)'}))
    ])
  ])