import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { HelloComponent } from './hello.component';

import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [HelloComponent],
})
export class AppModule {

  constructor(private injector: Injector) {
    const helloElement = createCustomElement(HelloComponent, {injector});
    customElements.define('my-hello', helloElement);
  }

  ngDoBootstrap() {}
}