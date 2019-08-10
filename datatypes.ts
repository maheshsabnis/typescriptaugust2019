let n1:number =10;
// console.log(typeof(n1));
let str:string = "Mahesh";
// console.log(typeof(str));
let dt:Date = new Date();
// console.log(typeof(dt));
console.log(dt);
// facts with types

let n2=100; // implict number declaration because of initial value
// console.log(typeof(n2));
let str1 ="ssss";  // implicit string declaration
// console.log(str1);
// console.log(typeof(str1));
str1="dddd333"
console.log(str1);
let n3:any;
console.log(typeof(n3)); // undefined

n3 = 123;
console.log(n3)
console.log(typeof(n3)); // number

n3 = "123";
console.log(n3)
console.log(typeof(n3)); // string