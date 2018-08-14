import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PopupComponent } from './popup/popup.component';
import { MyPreloadingStrategy } from './my-preloading';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'profile', component: HomeComponent },
  ] },

  { path: 'popup', component: PopupComponent, outlet: 'popup' },
  { path: 'popup2', component: PopupComponent, outlet: 'popup2' },

  {
    path: 'lazy',
    data: {
      nopreload: true
    },
    loadChildren: './huge/huge.module#HugeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: MyPreloadingStrategy
  })],
  providers: [ MyPreloadingStrategy ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
