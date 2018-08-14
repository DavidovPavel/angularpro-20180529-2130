// import { timer } from 'rxjs';

// timer(0, 1000).subscribe( (n: number) => console.log(n));

const myInput = document.querySelector('input');
// myInput.addEventListener('input', (event: KeyboardEvent) =>
//   console.log((event.target as HTMLInputElement).value));

// function createPromise() {
//   let listener;
//   const p = new Promise(resolve => {
//     listener = (event: KeyboardEvent) =>
//     resolve((event.target as HTMLInputElement).value);
//     myInput.addEventListener('input', listener);
//   });
//   p.then(value => {
//     console.log(value);
//     fetch(`https://api.github.com/search/repositories?q=${value}`)
//     .then(response => response.json())
//     .then(response => {
//       console.log(response.total_count);
//     })
//     myInput.removeEventListener('input', listener);
//     createPromise();
//   });
// }
// createPromise();


import { fromEvent, Observable, Observer, empty, throwError, Subject } from 'rxjs';
import { map, switchMap, debounceTime, observeOn } from 'rxjs/operators';

// const o = fromEvent(myInput, 'input');
// o.pipe(debounceTime(500),
//        map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)),
//        switchMap((value) => fetch(`https://api.github.com/search/repositories?q=${value}`)),
//        map(response => response.json()))
//   .subscribe(response => console.log(response.total_count));


// Observable

// const o = Observable.create((observer: Observer<string>) => {
//   observer.next('Hello!');
//   observer.next('Hello!');
//   observer.next('Hello!');

//   setInterval(_ => {
//     observer.next('Hi!');
//   }, 1000);

//   setTimeout(_ => {
//     observer.complete();
//   }, 5000)
// });


// const subscription = o.subscribe({
//   next: (value: string) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

// subscription.unsubscribe();

import { of, from } from 'rxjs';
import { timer, interval } from 'rxjs';
import { range, never } from 'rxjs';

// const o = of(1 ,3 ,4 ,6 ,7);
// const o = from([1 ,3 ,4 ,6 ,7]);
// const o = from(Promise.resolve(5));
// const o = from('string');
// fromEvent
// const o = interval(1000);
// const o = range(1, 100);
// const o = empty();
// const o = throwError('My strange error');
// const o = never();

// const subscription = o.subscribe({
//   next: (value: number ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

// let b: Observer<string>;
// const o = Observable.create((observer: Observer<string>) => {
//   b = observer;
//   observer.next('Hello!');
// });

// const subscription = o.subscribe({
//   next: (value: number ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

// b.next('Hola!');

// const s = new Subject();

// s.next('Hello!');

// const subscription = s.subscribe({
//   next: (value: number ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

// s.next('Hi!');


// HOT & COLD

// TV (HOT) ->         Subject, fromEvent
// COLD (Youtube) ->

import { first, last, filter, single, ignoreElements } from 'rxjs/operators'
import { debounce, distinctUntilChanged } from 'rxjs/operators'
import { throttle, throttleTime } from 'rxjs/operators'
import { audit, auditTime } from 'rxjs/operators'
import { skip, skipLast, skipUntil, skipWhile } from 'rxjs/operators'
import { take, takeLast, takeUntil } from 'rxjs/operators'

// const o = range(0, 100).pipe(take(10));

// const subscription = o.subscribe({
//   next: (value: number ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

import { forkJoin, combineLatest, zip } from 'rxjs';
import { merge, concat } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { withLatestFrom } from 'rxjs/operators';
import { pairwise, race } from 'rxjs/operators';

// const o1 = timer(1000, 4000).pipe(take(3));
// const o2 = timer(2000, 4000).pipe(take(3));
// const o3 = timer(3000, 4000).pipe(take(3));

// // const o = o1.pipe(zip(o2, o3));
// // const o = forkJoin(o1, o2, o3);
// const o = o1.pipe(race(o2, o3));

// const subscription = o.subscribe({
//   next: (value: number ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });



import { tap, delay, delayWhen, timeout, finalize } from 'rxjs/operators';

// const o = timer(0, 1000).pipe(delay(3000), tap(number => {
//   console.log(number * Math.random());
// }), timeout(2000), finalize(() => console.log('HERE!')));

// const o = timer(0, 1000).pipe(take(1));
// o.toPromise().then(console.log)

// const subscription = o.subscribe({
//   next: (value: number ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });


import { pluck, reduce, scan, groupBy } from 'rxjs/operators';
import { mapTo, flatMap, exhaustMap } from 'rxjs/operators';

// flatMap === mergeMap

// const o = Observable.create((observer: Observer<{name: string, surname: string}>) => {
//   observer.next({ name: 'John', surname: 'Wall'});
//   observer.next({ name: 'Bob', surname: 'Wall'});

//   setTimeout(_ => {
//     observer.next({ name: 'Bob', surname: 'Wood'});
//   }, 3000);
// }).pipe(pluck('name'), distinctUntilChanged());

// const o = of(1,2,3,4,5)
// .pipe(scan((total:number, current:number) => total + current));

// const o = of(1,2,3,4,5)
// .pipe(mapTo('Hi!'));

// [[1,2,3],[4,5]] => [1,2,3,4,5]

//const o = fromEvent(document, 'click')
//.pipe(flatMap(_ => interval(1000)));
// .pipe(switchMap(_ => interval(1000)));
//.pipe(exhaustMap(_ => interval(1000)));

import { catchError, retry, retryWhen } from 'rxjs/operators'

// const o = of(true).pipe(delay(3000), timeout(1000), catchError((error) => {
//   console.log(error);
//   return of(false);
// }));

// const o = interval(1000).pipe(
//   flatMap(v => {
//     if(v > 3){
//       return throwError('Error >3!');
//     }
//     return of(v);
//   })
//   ,retryWhen(errorObservable => errorObservable.pipe(delay(3000)))
// );


import { multicast, publish, share, shareReplay } from 'rxjs/operators';
import { asyncScheduler, queueScheduler, asapScheduler } from 'rxjs';

// COLD / HOT

// const o = interval(1000)
// .pipe(tap(_ => console.log('Doing something!')), shareReplay(Number.POSITIVE_INFINITY, 5000))

// o.subscribe();
// o.subscribe();
// o.subscribe();
// o.subscribe();
// o.subscribe();
// o.subscribe();
// o.subscribe();
// o.subscribe();

// const subscription = o.subscribe({
//   next: (value: any ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });


// const o1 = of(1,2).pipe(observeOn(asyncScheduler));
// const o2 = of(10);

// const o = combineLatest(o1, o2);

// o.subscribe({
//   next: (value: any ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });


const async$ = of('async').pipe(observeOn(asyncScheduler));
const asap$ = of('asap').pipe(observeOn(asapScheduler));
const queue$ = of('queue').pipe(observeOn(queueScheduler));

const o = async$.pipe(merge(asap$, queue$));

o.subscribe({
  next: (value: any ) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error', error)
});
