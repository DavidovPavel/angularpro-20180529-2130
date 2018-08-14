import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { switchMap, delay } from "rxjs/operators";

export class MyPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if( route.data && route.data['nopreload']){
      return of(false);
    }
    return of(true).pipe( delay(5000), switchMap(_ => load()) );
  };

}