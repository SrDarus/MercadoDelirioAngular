import {
  state, animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

 export let btnsCategoria = trigger('btnsCategoria', [
      //:enter ==> void => *
      //:leave ==> * => void
      state('inactivo', style({
      						cursor:'pointer'
      					})),
      //state('activo', style({
//
      //					})),
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(900)

      ])
    ])