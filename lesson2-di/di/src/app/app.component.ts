import { Component, Inject } from '@angular/core';
import { UserService } from './user.service';
import { API_BASE_URL_TOKEN } from './app.module';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  template: `
     <app-nested>

        <app-child></app-child>

     </app-nested>

  `,
  styles: [],
  providers: [],
})
export class AppComponent {
  title = 'app';

}
