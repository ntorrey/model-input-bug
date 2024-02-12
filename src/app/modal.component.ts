import { Component, model } from '@angular/core'
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [IonContent],
  template: `
    <ion-content>
      <div>This is a modal component with a model input</div>
      <div>This is the model input's value: {{ myModelInput() }}</div>
    </ion-content>
  `
})
export class ModalComponent {
  myModelInput = model<string>('default modal model value')
}
