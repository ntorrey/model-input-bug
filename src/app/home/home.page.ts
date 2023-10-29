import { Component } from '@angular/core';
import {
  IonContent,
  IonDatetime
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  template: `
    <ion-content [fullscreen]="true">
      <ion-datetime presentation="date" preferWheel="true"></ion-datetime>
    </ion-content>
  `,
  standalone: true,
  imports: [IonContent, IonDatetime],
})
export class HomePage {

  constructor() {}

}
