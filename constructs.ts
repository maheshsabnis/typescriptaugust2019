console.log(1 == "1"); // value equality --> true
console.log(1 === "1"); // strict type equality --> false

function test(x: boolean, y: boolean): void {
    if (x && y) {
        console.log('They ahve same value');
    }

    if (x || y) {
        console.log('Any of them is true');
    }
}

test(true, true);
test(true, false);
test(false, false);

let objA = { x: 10 };
let objB = { x: 10 };

console.log(`Object Equality ${objA==objB}`); // false
console.log(`Object Strict Equality ${objA===objB}`); //false

let objC = objA; // objC is Copy of objA

console.log(`Object Equality ${objA==objC}`);  // true
console.log(`Object Strict Equality ${objA===objC}`); // true

let objD=Object.assign({},objA);
objD.x =10;
console.log(`Object Equality ${objA==objD}`);    // false
console.log(`Object Strict Equality ${objA===objD}`);  // false