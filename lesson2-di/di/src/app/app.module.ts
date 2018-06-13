import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, ReflectiveInjector } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LogService } from './log.service';
import { AdminService } from './admin.service';
import { NestedComponent } from './nested/nested.component';
import { ChildComponent } from './child/child.component';

export const API_BASE_URL_TOKEN = new InjectionToken<string>('API_BASE_URL_TOKEN');

export const SUPER_TOKEN = new InjectionToken<UserService>(
  'SUPER_TOKEN',
  {
    providedIn: 'root',
    factory: () => new UserService()
  }
);

const injector:ReflectiveInjector = ReflectiveInjector.resolveAndCreate([UserService]);
const childInejctor = injector.resolveAndCreateChild([UserService]);
// injector.get(UserService) !== childInejctor.get(UserService);

/*
@Component
@Directive
@Pipe
@Injectable


Platform, Complier, NgZone - ReflectiveInjector => StaticInjection
Module, Component - not ReflectiveInjector

*/

@NgModule({
  declarations: [
    AppComponent,
    NestedComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { useClass: UserService, provide: UserService, deps: []}
    // {
    //   provide: UserService, useClass: UserService
    // }
    // { provide: API_BASE_URL_TOKEN, useValue: 'api.my.com' },
    // { provide: UserService, useFactory: function(log) {
    //   return new UserService();
    // },  deps: [LogService]},
    // { provide: UserService, useExisting: AdminService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
