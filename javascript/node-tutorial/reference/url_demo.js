const url = require('url')

const myUrl = new URL('http://mywebsite.com/greet/hello.html?id=3000&status=active')

// Serialized URL
console.log(myUrl.href)
// console.log(myUrl.toString())

// Host (Root Domain)
console.log(myUrl.host)

// Hostname
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized query
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams)

// Add params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((val, key) => console.log(`${key}: ${val}`))