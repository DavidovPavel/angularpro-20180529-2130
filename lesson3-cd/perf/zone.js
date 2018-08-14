

const oldSetTimeout = setTimeout;
setTimeout = (callback, time) => {
  console.log('setTimeout FIRED!');
  oldSetTimeout(() => {
    callback();
    console.log('setTimeout FINISHED!');
  }, time);
};


//-------

setTimeout(() => {
  console.log('TIMER DONE!');
}, 3000);