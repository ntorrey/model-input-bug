import { Component, inject } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonButton,
  IonContent,
  IonDatetime,
  IonModal,
  PopoverController
} from '@ionic/angular/standalone';
import { PopoverComponent } from './popover.component';
@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-content [fullscreen]="true">
        <ion-button (click)="openPopover()">Open</ion-button>
      </ion-content>
    </ion-app>

  `,
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonContent, IonDatetime, IonModal, IonButton
  ],
})
export class AppComponent {
  popoverController = inject(PopoverController)
  async openPopover() {
    const modal = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { myInput: 'new value'}
    })
    await modal.present()
  }

}
