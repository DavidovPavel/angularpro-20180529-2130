import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <a routerLink="">Home</a>
    <a routerLink="user">User</a>

    <a [routerLink]="[{outlets: { primary: 'user', popup: 'popup', popup2: 'popup2'} }]">User</a>

    <a [routerLink]="[{outlets: { popup: null, popup2: null} }]">No popup</a>

    <a [routerLink]="[{outlets: { popup: 'popup'} }]">popup1</a>

    <br>

    <a routerLink="lazy">Huge</a>

    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
    <router-outlet name="popup2"></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
