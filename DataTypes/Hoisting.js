'use strict';

const func = () => {
    console.log(`Hoisted var is ${hoisted}.`);
    var hoisted = 1;
};

console.log(func());
