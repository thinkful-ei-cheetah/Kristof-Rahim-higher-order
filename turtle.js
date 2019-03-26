// A turtle's movements can be represented by an array which looks like this: [3, 4]. The first item in the array represents the number of steps the turtle takes forwards. The second number in the array is the number of steps the turtle takes to the left.
// Here is an array of different movements made by a turtle: [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].
// Use the filter method to remove any items where the turtle moves backwards or to the right (i.e. where either the first or second number in an item is negative).
// Use the map method to create a new array containing how many steps the turtle makes in total with each movement (i.e. the first and second number added together).
// Use the forEach method to log out how many steps the turtle took in each case.

'use strict';

console.log([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
  .filter( item => item[0] >= 0  && item[1] >= 0));

[[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
  .map( item => item[0] + item[1])
  .forEach(item => console.log('I moved ' + item + ' steps'));

