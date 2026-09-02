let score = 44

console.log(typeof score) // number
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoggedIn = true
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

let someNumber = 34
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// now studying operations

let value = 3
let negValue = -value
console.log(negValue)

console.log(2+7)
console.log(2*7)
console.log(2**7)
console.log(2-7)
console.log(2/7)
console.log(2%7)

str1 = "Hello"
str2 = "World"
console.log(str1 + str2)
console.log(str1 + " " + str2)

console.log(2 + "2") // 22
console.log("2" + 2) // 22
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
console.log(2 + Number("2")) // 4
console.log(2 + Number("2.5")) // 4.5
console.log((2 + 4) - 6 * 10) // -54

let gameCounter = 100
gameCounter++ // 101
console.log(gameCounter)