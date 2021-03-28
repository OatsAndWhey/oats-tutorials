console.log('Hello World')
console.warn('Watch it, World')
console.error('World, what have you done?!')

// Variables
// var, let, and const
// var is globally scoped, let and const are block-scoped
// with let, you can reassign values
// const is immutable, will throw error
// const must be assigned value at initialization

let age = 26
age = 27

console.log(age)

// Data types
// primitives - String, Number, Boolean, null, undefined, Symbol
const name = 'Jeterbugs' 	// String
const years = 11 			// Number
const isSweet = true 	//Boolean
const x = null 				// variable but empty
const y = undefined	 	// undefined
let z 								// undefined

console.log(name, 'is a', typeof name)
console.log(years, 'is a', typeof years)
console.log(isSweet, 'is a', typeof isSweet)
console.log(x, 'is an', typeof x)
console.log(y, 'is', typeof y)
console.log(z, 'is', typeof z)

// Template literals
console.log(`His name is ${name} and he is ${years} years old`)

// String methods
console.log(name.length) // property is not a function. no ()
console.log(name.toUpperCase()) // methods have ()
console.log(name.substring(0, 5))
console.log(name.split(''))
console.log(name.split('e').join('').split('u').join(''))

// Arrays - variables that store multiple values
const numbers = new Array(1, 2, 3, 5, 8, 13, 21) // constructor
console.log(numbers)
// arrays declared with const can be manipulated but not reassigned
const fruits = ['apples', 'oranges', 'pears', 18, false] // array literal
console.log(fruits)

console.log(fruits[2]) // arrays are zero based

fruits.push('mango')
fruits.unshift('strawberries')
console.log(fruits)
const bestFruit = fruits.pop()
console.log(bestFruit)
const nextBestFruit = fruits.shift()
console.log(nextBestFruit)
console.log(fruits)
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('pears'))

// Object literals - key: value pairs
const person = {
	firstName: 'Rob',
	lastName: 'Hirst',
	address: {
		houseNumber: 7,
		street: 'Bank Hall Grove',
		village: 'Shepley',
		town: 'Huddersfield',
		county: 'West Yorkshire',
		postcode: 'HD8 8EQ'
	},
	age: 28,
	hobbies: ['snowboarding', 'movies', 'video gaming']
}

const { address: { houseNumber, street, village, town, county, postcode } } = person // destructuring

console.log(
	houseNumber,
	street,
	village,
	town,
	county,
	postcode)