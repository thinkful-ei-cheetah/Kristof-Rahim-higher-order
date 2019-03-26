'use strict';

function newFilter(arr, fn){
  const newArr = [];
  const len = arr.length;

  for (let index = 0; index < len; index++){
    if (fn(arr[index]) === true) newArr.push(arr[index]);
  }
  return newArr;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
console.log(newFilter(myNames, name=> name[0] === 'R'));