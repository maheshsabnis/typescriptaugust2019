let arrNames =new Array<string>();

arrNames.push('James Bond');
arrNames.push('Ethan Hunt');
arrNames.push('Indiana Jones');
arrNames.push('Jack Reacher');


// Standard Array iteration using for() loop
for(let i=0; i< arrNames.length;i++){
    console.log(`Element at ${i}th position is ${arrNames[i]}`);
}
console.log();
// Array itartion using ES 4 and ES 5 for..in loop
// the simpler syntax of for..loop
for(let i in arrNames) {
    console.log(`Element at ${i}th position is ${arrNames[i]}`);
}
console.log();

// Array Iteration new in ES 6 using for..of loop
// internally it uses System.iterator object
for(let n of arrNames){
    console.log(n);
}

arrNames.sort();
console.log('After Sort');
for(let n of arrNames){
    console.log(n);
}

arrNames.reverse();
console.log('After Reverse');
for(let n of arrNames){
    console.log(n);
}