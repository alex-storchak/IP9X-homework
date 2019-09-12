'use strict';

const person = { name: 'Alex' };
let anotherPerson = { name: 'Alex' };

// it's allowed to change object fields even of constant object
person.name = 'John';
console.log(person); // { name: 'John' }

// when assigning new value to the field of variable object
// field's type and value is set from type and value of assigning (new) value
anotherPerson.name = 'Smith';
console.log(anotherPerson); // { name: 'Smith' }

// when assigning new object to variable object,
// variable object changes its reference and points to new object
anotherPerson = { year: 2019 };
console.log(anotherPerson); // { year: 2019 }

// error because person contains constant reference to object
// and can't be changed
//person = { year: 2019 };
console.log(person); // TypeError: Assignment to constant variable.

const createUser = (name, city) => ({ name, city });
const userMarcus = createUser('Marcus Aurelius', 'Roma');
console.log(userMarcus);
