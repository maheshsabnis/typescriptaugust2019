// string is an object that have stribg methods
let strData:string = "TypeScript Training";

console.log('Length ' + strData.length);
console.log(' To Upper Case ' + strData.toUpperCase());
console.log(' To Lower Case ' + strData.toLowerCase());

let fname:string ="Tejas";
let mname:string ="Mahesh";
let lname:string ="Sabnis";

console.log('JavaScript standard Concatination ');
let conCat1 = fname + ' ' + mname + ' ' + lname;
console.log(conCat1);
console.log();
console.log('Using Template String');
let conCat2 = `${fname} 
               ${mname} 
               ${lname}`;
console.log(conCat2);



