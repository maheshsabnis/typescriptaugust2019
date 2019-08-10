let exp1 = "123ABC";
let exp2 = 77;

let res1 = exp1 + exp2; // + will overload fro string concatination because exp1 is string 
console.log('res1 ' + res1);
let res2 = exp2 + exp1; // + will overload fro string concatination because exp1 is string
console.log('res2 ' + res2);

let res3 = parseInt(exp1) + exp2; // the parseInt() will parse the exp1 from left to right and convert to number untill the first character is not found
console.log('res3 ' + res3); 
let exp3 = parseInt(exp1);
let res4 =eval(exp3.toString() + exp2.toString()); // eval() actually takes a string and try to excute the expression as mathematical expression, in this case it is the addition of exp1+exp2 mathematically, but will fail because is exp1 is string and exp2 is number
console.log('res4 ' + res4);

let exp4 = "10.20ddd";
console.log('parseInt ' + parseInt(exp4) + '  parseFloat ' +  parseFloat(exp4));
let a =3;
let b = 2;
let exp5 = a/b;
console.log(exp5);




