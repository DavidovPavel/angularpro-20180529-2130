import { Component } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(state: TransferState, http: HttpClient) {
    const somevalue = state.get('somekey', {});;

    if(!somevalue) {
      http.get().subscribe(_=> {
        state.set('somekey', {});
      });
    }
  }
}
