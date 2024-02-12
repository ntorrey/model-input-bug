import { Component, inject, signal } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonButton,
  IonContent,
  IonDatetime,
  IonModal,
  PopoverController, ModalController
} from '@ionic/angular/standalone';
import { PopoverComponent } from './popover.component';
import { ModalErrorComponent } from './modal-array-error.component';
import { ModalComponent } from './modal.component';
@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-content [fullscreen]="true">
        <ion-button (click)="openPopover()">Open Popover</ion-button>
        <ion-button (click)="openModal()">Open Modal</ion-button>
        <ion-button (click)="openModalError()">Open Modal with error</ion-button>
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
  modalController = inject(ModalController)
  itemArraySignal = signal(['one', 'two', 'three'])

  async openPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { myModelInput: this.itemArraySignal}
    })
    await popover.present()
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { myModelInput: this.itemArraySignal}
    })
    await modal.present()
  }

  async openModalError() {
    const modal = await this.modalController.create({
      component: ModalErrorComponent,
      componentProps: { myModelInput: this.itemArraySignal}
    })
    await modal.present()
  }

}
