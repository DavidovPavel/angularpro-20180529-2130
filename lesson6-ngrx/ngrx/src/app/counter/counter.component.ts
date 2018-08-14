import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './counter.reducer';

interface AppState {
  counter: number
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('counter')).subscribe(counter => this.counter = counter);
  }

  up() {
    this.store.dispatch({ type: INCREMENT });
  }

  down() {
    this.store.dispatch({ type: DECREMENT });
  }

}
