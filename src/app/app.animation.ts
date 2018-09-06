import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

export const basicAnim = trigger('basic',[
  state('inactive',style({
    backgroundColor:'#f00',
    transform:'scale(1)'
  })),
  state('active',style({
    backgroundColor:'#0f0',
    transform:'scale(1.1)'
  })),
  state('middle', style({
    backgroundColor:'#000',
    color:'#fff',
    transform:'scale(1)'
  })),
  transition('inactive <=> active',animate(300)),
  // transition('active => inactive',animate('300ms ease-in')),
  transition('inactive => middle',animate(300))
]);

export const multiStepAnim = trigger('multi',[
    state('start',style({
      backgroundColor:'white'
    })),
    state('end',style({
      backgroundColor:'black',
      color:'white'
    })),
  transition('start => end',[
    animate(2000,style({
      backgroundColor:'red'
    })),
    animate(2000,style({
      backgroundColor:'blue'
    })),
    animate(2000)
  ])
  ]
);

export const groupAnim = trigger('group',[
  state('start', style({
    backgroundColor:'white'
  })),
  state('end',style({
    backgroundColor:'black'
  })),
  transition('start => end',[
    group([
      animate(2000,style({
        width:'200px'
      })),
      animate(5000,style({
        backgroundColor:'red'
      }))
    ]),
    animate(3000)
  ])
]);

export const keyframesAnim = trigger('keyframe',[
  state('start', style({
    backgroundColor:'white'
  })),
  state('end',style({
    backgroundColor:'black'
  })),
  transition('start => end',animate(6000,keyframes([
    style({backgroundColor:'red'}),
    style({backgroundColor:'orange'}),
    style({backgroundColor:'yellow'}),
    style({backgroundColor:'green'}),
    style({backgroundColor:'blue'}),
    style({backgroundColor:'cyan'}),
    style({backgroundColor:'purple'})
  ])))
]);
