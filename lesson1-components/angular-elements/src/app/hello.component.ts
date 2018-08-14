import { Component, OnInit, Input, OnChanges, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-hello',
  template: `
    <p (click)="onClick()">
      {{greetings}}, {{name}}!
    </p>

    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnChanges {

  @Input() name: string;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  greetings = 'Привет';

  onClick() {
    this.clicked.emit(this.name);
  }

  ngOnChanges() {
    const options = [
      'Hi',
      'Hello',
      'Здравствуйте',
      'Bonjour',
      'Hola',
    ];
    this.greetings = options[Math.floor(Math.random() * options.length)];
  }
}
