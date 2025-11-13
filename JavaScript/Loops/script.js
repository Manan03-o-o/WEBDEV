//practice Questions
//print all even numbers from 1 to 100

for(let i =1; i<100; i++){


    if(i%2==0){
        console.log(i);
    }
}
//print multiplication table of a given number
let num = 7; // You can change this number to generate a different multiplication table
console.log("Multiplication Table of", num);
for(let i=1; i<=10; i++){
    console.log(num + " x " + i + " = " + (num * i));
}
