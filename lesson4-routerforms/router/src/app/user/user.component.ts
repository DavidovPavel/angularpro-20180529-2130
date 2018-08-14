import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>
      user works!

      <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
