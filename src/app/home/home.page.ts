import { Component, signal } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonDatetime, IonModal
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  template: `
    <ion-content [fullscreen]="true">
      <ion-button (click)="open()">Open</ion-button>
      <ion-modal [isOpen]="isOpen()" (didDismiss)="isOpen.set(false)" class="date-modal" style="--height: 300px;">
        <ng-template>
          <ion-datetime
            #datetime
            presentation="date"
            [preferWheel]="true">
          </ion-datetime>
        </ng-template>
      </ion-modal>
    </ion-content>
  `,
  standalone: true,
  imports: [IonContent, IonDatetime, IonModal, IonButton],
})
export class HomePage {
  isOpen = signal(false)
  constructor() {}

  open() {
    this.isOpen.set(true)
  }

}
