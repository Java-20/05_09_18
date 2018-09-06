import { Component } from '@angular/core';
import {basicAnim, groupAnim, keyframesAnim, multiStepAnim} from './app.animation';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    basicAnim,
    multiStepAnim,
    groupAnim,
    keyframesAnim
  ]
})
export class AppComponent {
  basicState = 'inactive';
  multiState = 'start';
  groupState = 'start';
  frameState = 'start';

  changeState(state:string){
    this.basicState = state;
  }
}
