import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('hello')).toBe('olleh');
  });

  it('should throw an error', () => {
    const pipe = new ReversePipe();
    expect((() => pipe.transform(111))).toThrowError('ReversePipe: 111 is not a string!');
  });
});
