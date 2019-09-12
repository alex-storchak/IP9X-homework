'use strict';

const func = () => {
    const hoisted = 'blablabla';
    console.log(`Hoisted var is "${hoisted}".`);
    //var hoisted = 1;
};

func();
