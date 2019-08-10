var arrNames = new Array();
arrNames.push('James Bond');
arrNames.push('Ethan Hunt');
arrNames.push('Indiana Jones');
arrNames.push('Jack Reacher');
// Standard Array iteration using for() loop
for (var i = 0; i < arrNames.length; i++) {
    console.log("Element at " + i + "th position is " + arrNames[i]);
}
console.log();
// Array itartion using ES 4 and ES 5 for..in loop
// the simpler syntax of for..loop
for (var i in arrNames) {
    console.log("Element at " + i + "th position is " + arrNames[i]);
}
console.log();
// Array Iteration new in ES 6 using for..of loop
// internally it uses System.iterator object
for (var _i = 0, arrNames_1 = arrNames; _i < arrNames_1.length; _i++) {
    var n = arrNames_1[_i];
    console.log(n);
}
arrNames.sort();
console.log('After Sort');
for (var _a = 0, arrNames_2 = arrNames; _a < arrNames_2.length; _a++) {
    var n = arrNames_2[_a];
    console.log(n);
}
arrNames.reverse();
console.log('After Reverse');
for (var _b = 0, arrNames_3 = arrNames; _b < arrNames_3.length; _b++) {
    var n = arrNames_3[_b];
    console.log(n);
}
