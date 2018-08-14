console.log('before');
setImmediate(_ => console.log('setImmediate'));    // 1
setTimeout(_ => console.log('setTimeout'));        // 2
Promise.resolve().then(_ => console.log('Promise')); // 3
console.log('after');