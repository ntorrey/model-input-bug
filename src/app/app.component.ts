import { Component, inject, signal } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonButton,
  IonContent,
  IonDatetime,
  IonModal,
  PopoverController, ModalController, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { PopoverComponent } from './popover.component';
import { ModalComponent } from './modal.component';
@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-content [fullscreen]="true">
        <ion-button (click)="openPopover()">Open Popover</ion-button>
        <ion-button (click)="openModal()">Open Modal</ion-button>
        <ion-list>
          @for (item of itemArraySignal(); track  item) {
            <ion-item>
              <ion-label>{{item}}</ion-label>
            </ion-item>
          }
        </ion-list>
      </ion-content>
    </ion-app>

  `,
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonContent, IonDatetime, IonModal, IonButton, IonList, IonItem, IonLabel
  ],
})
export class AppComponent {
  popoverController = inject(PopoverController)
  modalController = inject(ModalController)
  itemArraySignal = signal(['one', 'two', 'three'])

  async openPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { myModelInput: this.itemArraySignal()}
    })
    await popover.present()
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { myModelInput: this.itemArraySignal()}
    })
    await modal.present()
  }

}
