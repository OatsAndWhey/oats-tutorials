const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
	// let url = req.url

	// if (url === '/') {
	// 	fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
	// 		if(err) throw err
	// 		res.writeHead(200, { 'Content-Type': 'text/html' })
	// 		res.end(content)
	// 	})
	// }
	// else if (url === '/about'){
	// 	fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
	// 		if(err) throw err
	// 		res.writeHead(200, { 'Content-Type': 'text/html' })
	// 		res.end(content)
	// 	})
	// }
	// else if (url === '/api/users') {
	// 	const users = [
	// 		{ name: 'Rob', age: 28 },
	// 		{ name: 'Ash', age: 27},
	// 		{ name: 'Jeter', age: 11}
	// 	]

	// 	res.writeHead(200, { 'Content-Type': 'application/json' })
	// 	res.end(JSON.stringify(users))
	// }

	// Build dynamic filepath
	let filepath = path.join(
		__dirname,
		'public',
		req.url === '/' ? 'index.html' : req.url
	)
	
	// Extension of file
	let extname = path.extname(filepath)

	// Initial content type
	let contentType = 'text/html'

	// Check ext and set content type
	switch(extname) {
		case '.js':
			contentType = 'text/javascript'
			break
		case '.css':
			contentType = 'text/css'
			break
		case '.json':
			contentType = 'application/json'
			break
		case '.png':
			contentType = 'image/png'
			break
		case '.jpg':
			contentType = 'image/jpg'
			break
	}

	// Read file
	fs.readFile(filepath, (err, content) => {
		if(err) {
			if(err.code === 'ENOENT') {
				// Page not found
				fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
					res.writeHead(200, { 'Content-Type': 'text/html' })
					res.end(content, 'utf8')
				})
			} else {
				// Some server error
				res.writeHead(500, { 'Content-Type': 'text/html' })
					res.end(`Server error: ${error.code}`)
			}
		} else {
			// Successful response
			res.writeHead(200, { 'Content-Type': contentType })
			res.end(content, 'utf8')
		}
	})
})

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Server running on port ${port}`))