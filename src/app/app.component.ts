import { Component, signal } from '@angular/core';
//import { IonicModule } from '@ionic/angular';
import { IonApp, IonRouterOutlet, IonButton, IonContent, IonDatetime, IonModal } from '@ionic/angular/standalone';
@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-content [fullscreen]="true">
        <ion-button (click)="isOpen.set(true)">Open</ion-button>
        <ion-modal [isOpen]="isOpen()" (didDismiss)="isOpen.set(false)" class="date-modal" style="--height: 300px;">
          <ng-template>
            <ion-content>
              <ion-datetime
                #datetime
                presentation="date"
                [preferWheel]="true">
              </ion-datetime>
            </ion-content>
          </ng-template>
        </ion-modal>
      </ion-content>
    </ion-app>
    
  `,
  standalone: true,
  imports: [
    //IonicModule,
    IonApp, IonRouterOutlet, IonContent, IonDatetime, IonModal, IonButton
  ],
})
export class AppComponent {
  isOpen = signal(false)

}
