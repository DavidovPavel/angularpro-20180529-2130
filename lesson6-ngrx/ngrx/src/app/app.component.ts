import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter></app-counter>
    <app-counter></app-counter>
    <app-counter></app-counter>
  `,
})
export class AppComponent {
  title = 'app';
}
