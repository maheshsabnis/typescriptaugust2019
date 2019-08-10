var exp1 = "123ABC";
var exp2 = 77;
var res1 = exp1 + exp2; // + will overload fro string concatination because exp1 is string 
console.log('res1 ' + res1);
var res2 = exp2 + exp1; // + will overload fro string concatination because exp1 is string
console.log('res2 ' + res2);
var res3 = parseInt(exp1) + exp2; // the parseInt() will parse the exp1 from left to right and convert to number untill the first character is not found
console.log('res3 ' + res3);
var exp3 = parseInt(exp1);
var res4 = eval(exp3.toString() + exp2.toString()); // eval() actually takes a string and try to excute the expression as mathematical expression, in this case it is the addition of exp1+exp2 mathematically, but will fail because is exp1 is string and exp2 is number
console.log('res4 ' + res4);
var exp4 = "10.20ddd";
console.log('parseInt ' + parseInt(exp4) + '  parseFloat ' + parseFloat(exp4));
var a = 3;
var b = 2;
var exp5 = a / b;
console.log(exp5);
