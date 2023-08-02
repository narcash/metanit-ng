import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = ['a', 'b', 'c', 'd', 'e'];
}
