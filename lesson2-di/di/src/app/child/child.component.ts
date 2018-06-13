import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child',
  template: `
    <p>

    </p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  //constructor(public log: LogService) { }

  ngOnInit() {
  }

}
