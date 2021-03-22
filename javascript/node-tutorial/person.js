class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	
	greeting() {
		console.log(`My name is ${this.name} and I am ${this.age} years old`)
	}

	reply() {
		console.log(`Hello there! I'm, ${this.name} and ${this.age}`)
	}
}

module.exports = Person;