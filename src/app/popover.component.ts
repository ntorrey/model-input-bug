import { Component, input } from '@angular/core'

@Component({
  selector: 'app-popover-component',
  standalone: true,
  imports: [],
  template: `
    <div>This is a popover component with a signal input</div>
    <div>This is the signal input's value: {{ myInput() }}</div>
  `
})
export class PopoverComponent {
  myInput = input<string>('initial')

}
