import { Component, model } from '@angular/core'
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-popover-component',
  standalone: true,
  imports: [IonContent],
  template: `
    <ion-content>
      <div>This is a popover component with a model input</div>
      <div>This is the model input's value: {{ myModelInput() }}</div>
    </ion-content>
  `
})
export class PopoverComponent {
  myModelInput = model<string>('default popover model value')
}
