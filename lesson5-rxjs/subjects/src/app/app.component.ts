import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  subscribersValues = [];
  subject = new AsyncSubject<number>();

  emitValue() {
    ++this.counter;
    this.subject.next(this.counter);
  }

  complete() {
    this.subject.complete();
  }

  subscribe() {
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues);
    this.subject.subscribe(value => subscriberValues.push(value));
  }
}
