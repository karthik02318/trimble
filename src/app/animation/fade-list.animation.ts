import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeListAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeListAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.5s')
    ]),
    transition(':leave', [
      animate('.5s', style({ opacity: 0 }))
    ]),
  ]);
