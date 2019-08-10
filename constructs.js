console.log(1 == "1");
console.log(1 === "1");
function test(x, y) {
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
var objA = { x: 10 };
var objB = { x: 10 };
console.log("Object Equality " + (objA == objB)); // false
console.log("Object Strict Equality " + (objA === objB)); //false
var objC = objA; // objC is Copy of objA
console.log("Object Equality " + (objA == objC)); // true
console.log("Object Strict Equality " + (objA === objC)); // true
var objD = Object.assign({}, objA);
objD.x = 10;
console.log("Object Equality " + (objA == objD)); // false
console.log("Object Strict Equality " + (objA === objD)); // false
