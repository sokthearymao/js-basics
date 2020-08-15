// This is my first JavaScript code!
// console.log('Hello World, punker!')

// variables
// let name = 'Mosh'
// console.log(name)

// Rules: variables cannot be a reserved keyword
// should have meaningfull and descriptive names
// cannot start with a number (1name)
// cannot contain a space or hypen (-)
// are case-sensitive

// let firstName = 'Mosh'
// let lastName = 'Haneesi'

// let interestRate = 0.3
// interestRate = 1
// console.log(interestRate)

// let name = 'Mosh' // String literal
// let age = 30 // number literal
// let isApproved = true // boolean literal true or false
// let firstName = undefined
// let selectedColor = null // used when we want to clear the value of a variable

//Objects
// let name = 'Mosh'
// let age = 30

// let person = {
//     name: 'Mosh',
//     age: 30
// }

// // Dot Notation
// person.name = 'John'

// // Bracket Notation
// let selection = 'name'
// person['name'] = 'Mary'

// console.log(person.name)

// Arrays
// let selectedColors = ['red', 'blue'] // array literal
// selectedColors[2] = 'green'
// console.log(selectedColors.length)

// functions
// function greet() {
//     console.log('Hello World')
// }

// greet()

// function greet(name, lastName) {
//     console.log(`Hello world ${name} ` + lastName)
// }

// greet('John', 'Smith')
// greet('Mary')

// function square(number) {
//     return number * number
// }

// // let number = square(6)
// // console.log(number)
// console.log(square(2))

// Arithmetic Operators
// let x = 10
// let y = 3
// console.log( x + y) // addition operator
// console.log( x - y) // subtraction operator
// console.log( x * y) // multiplication operator
// console.log( x / y) // division operator
// console.log( x % y) // modulus operator
// console.log(x ** y) // exponent operator

// Increment (++)
// console.log(++x)
// console.log(x++)
// console.log(x)
// Decrement (--)
// console.log(--x)
// console.log(x--)
// console.log(x)

// Assignment Operators
// let x = 10

// x = x + 5
// x += 5
// x = x * 3
// x *= 3

//Comparison Operators
// let x = 1
// console.log(x > 0)
// console.log(x >= 1)
// console.log(x < 1)
// console.log(x <= 1)

//equality operators
// console.log(x === 1)
// console.log (x !== 1)

// strict equality operator ( same type + value)
// console.log( 1 === 1)
// loose equality operator ( same value )
// console.log( '1' == 1)
// console.log( 1 == 1)

// Ternary Operator
/* 
if a customer has more than 100 points,
they are a 'gold' customer, otherwise,
they are a 'silver' customer
*/

// let points = 90
// let type = points > 100 ? 'gold' : 'silver'

// console.log(type)

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(false && true)

// let highIncome = true
// let goodCreditScore = true
// let eligibleForLoan = highIncome && goodCreditScore

// console.log(eligibleForLoan)

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
// let highIncome = false
// let goodCreditScore = false
// let eligibleForLoan = highIncome || goodCreditScore
// console.log('Eligible', eligibleForLoan)

// NOT (!)
// let applicationRefused = !eligibleForLoan
// console.log('Application Refused', applicationRefused)

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting

// let userColor = 'red'
// let defaultColor = 'blue'
// let currentColor = userColor || defaultColor

// console.log(currentColor)

// Bitwise Operators
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000
// console.log(1 | 2) // Bitwise OR
// console.log(1 & 2) // Bitwise AND

// Read, Write, Execute
// 00000100
// 00000110
// 00000111

// const readPermission = 4
// const writePermission = 2
// const executePermission = 1

// let myPermission = 0
// myPermission = myPermission | readPermission | writePermission
// console.log(myPermission)

// let message = 
//     (myPermission & readPermission) ? 'yes': 'no'

// console.log(message)

// Operators Precedence
// let x = (2 + 3) * 4 // multiplication precedence or us ()

// console.log(x)

// Exercise - Swapping Variables
// let a = 'red'
// let b = 'blue'

// let c = a
// a = b
// b = c

// console.log(a)
// console.log(b)

// If...else
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good Evening!

// if (condition) {
//     statement
// }
// else if (another condition){
//     statement
// } else if (yetAnotherCondition)
//     statement
//   else
//     statement

// let hour = 19

// if (hour >= 6 && hour < 12) 
//     console.log('It is morning punk, ohayo!')
// else if (hour >= 12 && hour < 18)
//     console.log('It is the afternoon punk, konnichiwa!')
// else 
//     console.log("It is late now punk, konbanwa!")

// Switch...case
//let role 
// let role = 'guest'

// switch (role) {
//     case 'guest':
//         console.log('Guest User')
//         break
//     case 'moderator':
//         console.log('Moderator User')
//         break
//     default:
//         console.log('Unknown Role/User')
// }

// if (role === 'guest') console.log('Guest')
// else if (role === 'moderator') console.log('Moderator')
// else console.log('Unknown User')

// FOR Loops
// for (let i = 0; i < 5; i++ ) {
//     console.log('Hello World', i)
// }
// for (let i = 1; i <= 5; i++) {
//     console.log('Hello World', i)
// }
// for (let i = 5; i >= 1; i--) {
//     console.log('Hello World', i)
// }

// While Loops
// let i = 0;
// while (i <=5 ) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// Do...while loops
// let i = 0
// do {
//     if (i % 2 !== 0) console.log(i)
//     i++
// } while (i <= 5)

// Infinite Loops
// let i = 0
// while (i < 5) {
//     console.log(i)
// }

// while (true) {

// }

// let x = 0
// do {
//     // x++
// } while (x < 5)

// for (let i = 0; i> 0; i++)

// For...in loop
// const person = {
//     name: 'Mosh',
//     age: 30
// }

// Dot Notation
// person.name

// Bracket Notation
// person['name']

// for (let key in person)
//     console.log(key, person[key])

// iterate through elements of an array
// const colors = ['red', 'green', 'blue']

// iterate through the properties of an object
// for (let index in colors)
//     console.log(index, colors[index])

// For-of loop
// for (let color of colors)
//     console.log(color)

// Break and Continue
// let i = 0
// while (i <= 10) {
//     //if (i === 3) break
//     if (i % 2 === 0) {
//         i++
//         continue
//     }
//     console.log(i)
//     i++
// }

// Exercise Function Max of Two Numbers
// let number = max(5,10)
// console.log(number)
// function max(a,b) {
//     // if (a > b) return a
//     // return b

//     return (a > b) ? a : b
// }

// Exercise Lnadscape or Portrait
// console.log(isLandscape(600, 900))
// function isLandscape(width, height) {
//     return (width > height)
// }

// Exercise FizzBuzz Algorithm

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// NOt divisible by 3 or 5 => input
// Not a number => 'Not a number'

// const output = fizzBuzz(77)
// console.log(output)

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz'
//     if (input % 3 === 0)
//         return 'Fizz'
//     if (input % 5 === 0)
//         return 'Buzz'
//     return console.log(`${input} is not divisible by 3 or 5.`)
// }

// Exercise Demerit Points

// Speed Limit = 70
// 5 -> 1 point
//Math.floor(1.3)
// 12 points -> suspended
// checkSpeed(130)

// function checkSpeed(speed) {
//     const speedLimit = 70
//     const kmPerPoint = 5

//     if (speed < speedLimit + kmPerPoint) {
//         console.log(`Your current speed is ${speed}, you are driving the speed limit OK`)

//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint)
//     if (points >= 12)
//         console.log(`Your current speed is ${speed}, you are driving too fast! Your current demerit points are ${points} points, and your license will be suspended punk!`)
//     else
//         console.log(`Your current speed is ${speed}, and you currently have ${points} points.`)
    
// }

// Exercise Even and Odd numbers
// showNumbers(10)

// function showNumbers(limit) {
//     for (let i = 0; i<=limit; i++){
//         // if (i % 2 === 0 ) console.log(i, 'EVEN')
//         // else console.log(i, 'ODD')

//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i, message)
//     }
// }

// Exercise Count Truth
// Falsy Values
// undefined
// null
// ''
// false
// 0
// NaN

// const isActive = true
// const name = 'Mosh' // Truthy (true)
// if (isActive) console.log('Hello')

// const array = [0, null, undefined, '', 1, 2, 3]

// console.log(countTruthy(array))

// function countTruthy(array) {
//     let count = 0
//     for (let value of array)
//         if (value)
//             count++
//     return count
// }

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// }

// showProperties(movie)

// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key])
    
// }

// Exercise Sum of Multiples of 3 and 5
// console.log(sum(10))

//Multiples of 3: 3, 6, 9
//Multiples of 5: 5, 10, 15

// function sum(limit) {
//     let sum = 0

//     for (let i = 0; i<= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i
    
//     return sum
// }

// Exercise Grades
// const marks = [81, 95, 50, 66, 77]

// Average = 70

// 1-59: 'F'
// 60-69: 'D'
// 70-79: 'C'
// 80-89: 'B'
// 90-100: 'A'

// console.log(calculateGrade(marks))

// function calculateGrade(marks) {
//     const average = calculateAverage(marks)

//     if (average < 60) return 'F'
//     if (average < 70) return 'D'
//     if (average < 80) return 'C'
//     if (average < 90) return 'B'
//     return 'A'
// }

// function calculateAverage(array) {
//     let sum = 0
//     for (let mark of array)
//         sum += mark
//     return sum / array.length
// }

// Exercise Stars
// showStars(10)

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = ''
//         for (let i = 0; i < row; i++)
//             pattern += '*'
//         console.log(pattern)
//     }
// }

// Exercise Prime Numbers

// Primes are whose factors are only divisible by 1 and itself
// Composite

// 12 = 1, 2, 3, 4, 5, 6, 12
// Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

//showPrimes(200)
// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) 
//         if (isPrime(number)) console.log(number)
  
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false

//     return true
// }