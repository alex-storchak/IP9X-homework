'use strict';

/*
    Prepare two implementations of inc function:

    First with signature inc(n: number): number,
    call example: const a = 5; const b = inc(a); console.dir({ a, b });

    Second with signature inc(num: Num) where Num is object with field n,
    so function will change field of the object passed by reference,
    call example: const obj = { n: 5 }; inc(obj); console.dir(obj);
*/

{
    const inc = n => ++n;

    const a = 5;
    const b = inc(a);
    console.dir({ a, b });
}

{
    const inc = Num => ++Num.n;
    const obj = { n: 5 };
    inc(obj);
    console.dir(obj);
}
