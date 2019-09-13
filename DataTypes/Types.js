/*
Count different type values in array.
Prepare array with values of different types, for example:
[true, 'hello', 5, 12, -200, false, false, 'word'] but preferably longer
and more varied.
Prepare collection-object (hash) with type names as keys
and 0 as values, for example: { number: 0, string: 0, boolean: 0 }

Iterate array with for..of loop and increment occurrence counter there
to get collection of types occurrences count for all types in array.

Modify this example: remove all keys from initial collection literal and
add all keys dynamically from the loop.
*/

'use strict';
/* global BigInt */

const sample = [
  true, 'hello', 5, 12, -200, false, false, 'word', //123n
  BigInt(123), BigInt(111), null, undefined, n => console.log(n),
  Symbol('id'), { name: 'John' }
];

const predefinedTypes = {
  undefined: 0, number: 0, string: 0, boolean: 0,
  symbol: 0, bigint: 0, null: 0, object: 0
};
const dynamicTypes = {};

for (const item of sample) {
  const itemType = (
    item === null ?
      null :
      (typeof item === 'function' ? 'object' : typeof item)
  );
  predefinedTypes[itemType]++;
  dynamicTypes[itemType] = (
    typeof dynamicTypes[itemType] === 'undefined' ? 1 : ++dynamicTypes[itemType]
  );
}
console.dir(predefinedTypes);
console.dir(dynamicTypes);
