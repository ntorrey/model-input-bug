import { Component, model } from '@angular/core'
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [IonContent, IonButton],
  template: `
    <ion-content>
      <div>This is a modal component with a model input. Only the first item is added to the signal in the app.component for some reason</div>
      <ion-button (click)="addItem()">Add item</ion-button>
      <div>This is the model input's value: {{ myModelInput() }}</div>
    </ion-content>
  `
})
export class ModalComponent {
  myModelInput = model<string[]>(['default modal model value'])
  count = 1
  addItem() {
    this.myModelInput.update((items: string[]) => {
      this.count++
      items.push('from modal' + this.count)
      return [...items]
    })
  }
}
