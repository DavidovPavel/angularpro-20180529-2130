import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-nested',
  template: `
    <p>
      nested works! - {{log.randomNumber}}
    </p>
    <app-child></app-child>
  `,
  viewProviders: [ LogService ],
})
export class NestedComponent implements OnInit {

  constructor(public log: LogService) { }

  ngOnInit() {
  }

}
