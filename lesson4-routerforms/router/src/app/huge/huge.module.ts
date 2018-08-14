import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HugeComponent } from './huge.component';

const routes: Routes = [
  { path: '', component: HugeComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HugeComponent]
})
export class HugeModule { }
