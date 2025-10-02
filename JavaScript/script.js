//arithmetic operators
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);  
console.log(++a);
console.log(--b);
console.log(a++);
console.log(b--);
console.log(a);
console.log(b);

//assignment operators
let c = 20;
c += 5;
console.log(c);
c -= 5;
console.log(c);
c *= 2;
console.log(c);
c /= 5;
console.log(c);
c %= 2;
console.log(c);
c **= 3;
console.log(c);

//comparison operators
let x = 10;
let y = '10';
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);   
console.log(x > 5);
console.log(x < 15);
console.log(x >= 10);
console.log(x <= 20);

//logical operators
let p = true;
let q = false;
console.log(p && q);
console.log(p || q);
console.log(!p);
console.log(!q);
console.log(p && !q);
console.log(!p || q);

//string operators
let str1 = "Hello, ";
let str2 = "World!";
let str3 = str1 + str2;
console.log(str3);
str3 += " How are you?";
console.log(str3);

//ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);

//type conversion
let numStr = "123";
let num = Number(numStr);
console.log(num);
let str = String(num);
console.log(str);
let bool = Boolean(num);
console.log(bool);
let obj = Object(num);
console.log(obj);