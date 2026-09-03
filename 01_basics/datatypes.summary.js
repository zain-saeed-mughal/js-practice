// Primitive
// 7 types of primitive data types in JavaScript
// 1. Number
// 2. String    
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const name = "Zain Saeed Mughal"; // String

const age = null; // Null

const score = 10; // Number
const scoreValue = 10.3 // Number

const isLoggedIn = false; // Boolean
const outsideTemp = 30; // Number
const userEmail = undefined; // Undefined

const id = Symbol("123"); // Symbol
const anotherId = Symbol("123"); // Symbol

console.log(id === anotherId) // false

const bigNumber = 34567890123456789012345678901234567890n; // BigInt

// Reference (Non-Primitive)
// 1. Object
// 2. Array
// 3. Function

const heros = ["Shaktiman", "Nagraj", "Doga", "Krrish"]; // Array

const myObj = {
    name: "Zain Saeed Mughal",
    age: 20,
    isLoggedIn: false
} // Object

function myFunction() {
    console.log("Hello World");
} // Function

