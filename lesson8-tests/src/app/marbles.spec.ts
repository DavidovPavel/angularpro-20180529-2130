import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { of, interval  } from 'rxjs';
import { map, retry, concat, take, filter, delay } from 'rxjs/operators';

xdescribe('Marbles', () => {
  it('simple', () => {
    const source = 'x---x-x|';
    const expected = 'x---x-x|';

    expect(cold(source)).toBeObservable(cold(expected));
  });

  it('concat', () => {
    const o1 = cold('x-x|');
    const o2 = cold('-y|');

    expect(o1.pipe(concat(o2))).toBeObservable(cold('x-x-y|'));
  });

  it('concat', () => {
    const o1 = cold('x-x|', { x : 'some value'});
    const o2 = cold('-y|', { y : 999 });

    expect(o1.pipe(concat(o2)))
    .toBeObservable(cold('a-a-b|', {
      a: 'some value',
      b: 999
    }));
  });

  it('async', () => {
    const o = interval(10, getTestScheduler()).pipe(
      take(5),
      filter(v => v % 2 === 0)
    );

    getTestScheduler().flush();
    expect(o).toBeObservable(cold('-a-b-(c|)', {
      a: 0,
      b: 2,
      c: 4
    }));
  });

  it('delay', () => {
    const o = cold('a|', { a: 1}).pipe(delay(20, getTestScheduler()));
    expect(o).toBeObservable(cold('--a|', { a : 1}))
  })

  it('error', () => {
    const o = of(1,2,3).pipe(
      map(val => {
        if(val > 2){
          throw new Error('error');
        }
        return val;
      }),
      retry(2)
    );

    const expected = cold('(ababab#)', {
      a : 1,
      b : 2,
    });

    expect(o).toBeObservable(expected)



  })
});