'use strict';

const average = (a, b) => (a + b) / 2;
const square = x => x ** 2;
const cube = x => x ** 3;

for (let i = 0; i < 10; i++) {
  let avg = average(square(i), cube(i));
  console.log(`Average for ${i} squared and cubed is ${avg}.`);
}
