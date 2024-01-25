import { Component, input } from '@angular/core'

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [],
  template: `
    <div>This is a modal component with a signal input</div>
    <div>This is the signal input's value: {{ myInput() }}</div>
  `
})
export class ModalComponent {
  myInput = input<string>('initial')

}
