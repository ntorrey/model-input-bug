import { Component, inject } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonButton,
  IonContent,
  IonDatetime,
  IonModal,
  ModalController
} from '@ionic/angular/standalone';
import { ModalComponent } from './modal.component';
@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-content [fullscreen]="true">
        <ion-button (click)="openModal()">Open</ion-button>
      </ion-content>
    </ion-app>
    
  `,
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonContent, IonDatetime, IonModal, IonButton
  ],
})
export class AppComponent {
  modalController = inject(ModalController)
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { myInput: 'new value'}
    })
    await modal.present()
  }

}
