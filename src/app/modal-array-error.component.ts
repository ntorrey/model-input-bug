import { Component, model } from '@angular/core'
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-error-component',
  standalone: true,
  imports: [IonContent],
  template: `
    <ion-content>
      <div>This will error</div>
      @for(item of myModelInput(); track item) {
        <div>This is item's value: {{ item }}</div>
      }
      
    </ion-content>
  `
})
export class ModalErrorComponent {
  myModelInput = model<string[]>(['default 1', 'default 2', 'default 3'])

}
