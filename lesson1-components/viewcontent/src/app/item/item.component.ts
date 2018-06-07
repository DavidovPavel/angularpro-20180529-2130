import { Component, OnInit, QueryList, ContentChild, AfterContentInit, ContentChildren, AfterViewInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { NestedComponent } from '../nested/nested.component';
import { BannerComponent } from '../banner/banner.component';
import { HostDirective } from '../host.directive';

@Component({
  selector: 'app-item',
  template: `
   <div *ngFor="let i of [1,2,3,4,5]">
   <div *delay="i * 1000">{{i}}</div>
   </div>

   <h1 colory #c="colory">VIEW</h1>
   <input (input)="c.changeColor($event.target.value)">
   <h1 colory #c2="colory">VIEW</h1>
   <input (input)="c2.changeColor($event.target.value)">
   <ng-content select="h1"></ng-content>
   <ng-content select="main"></ng-content>

   <div appHost>
   </div>

   <ng-container *ngComponentOutlet="myComponentClass"></ng-container>

   {{11111| myformat}}
   `,
})
export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  public myComponentClass = BannerComponent;

  // @ContentChild(NestedComponent) nested: NestedComponent;
  @ContentChildren(NestedComponent) nestedElements: QueryList<NestedComponent>;
  // @ViewChild()
  // @ViewChildren()

  @ViewChild(HostDirective) host: HostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
  private view: ViewContainerRef) { }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnInit() {
    console.log('ngOnInit');

    const bannerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    this.host.view.createComponent(bannerComponentFactory);


    setTimeout(() => {
      this.myComponentClass = NestedComponent;
    }, 3000)
  }

}
