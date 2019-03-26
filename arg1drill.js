'use strict';

function repeat(callback, n) {
  for (let i = 0; i < n; i++) {
    callback();
  }
}

function hello() {
  console.log('Hello world');
}
function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);
