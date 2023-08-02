import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: `<p>{{ counter }}</p>`,
  styles: [],
})
export class ChildComponent {
  counter: number = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
