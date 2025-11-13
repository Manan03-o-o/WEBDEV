console.log("Loops in JavaScript");
// For Loop
// for (let i = 0; i < 5; i++) {
//     console.log("For Loop iteration:", i);
// }
// let sum =0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum +i;
// }
// console.log("sum =", sum);

// While Loop
// let i =1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// Do-While Loop
// let i =20;
// do{
//     console.log(i);
//     i++;
// }
// while(i <= 10);

// for-of Loop
// let colors = ["Red", "Green", "Blue", "Yellow"];
// for (let color of colors) {
//     console.log(color);
// }

// for-in Loop
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key, ":", person[key]);
}