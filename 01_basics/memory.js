// Stack memory(primitive) and Heap memory(non-primitive) are two types of memory used in programming languages to manage data storage and allocation.

let myName = "Zain Saeed Mughal";
let anotherName = myName;
anotherName = "Zain Saeed Mughal 2";

console.log(myName);
console.log(anotherName);

let userOne = { 
    name: "Zain Saeed Mughal", 
    age: 23
};

let userTwo = userOne;
userTwo.name = "Zain Saeed Mughal 2";

console.log(userOne);
console.log(userTwo);