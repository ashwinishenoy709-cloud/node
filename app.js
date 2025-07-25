//http module
const {readFileSync ,writeFileSync} = require('fs')
const read = readFileSync('./index.html' ,'utf-8')

const http = require('http')

const server = http.createServer((request, response) =>{    //(req, res)
    if(request.url === '/'){
        response.write(read)
        response.end()
        //response.end("Welcome")
    }
    else if(request.url === '/about'){
        response.write("Welcome to the about page")
        response.end()
    }
    //console.log("hiiii")
    else{
        response.writeHead(200,{'content-type':'text/html'})   //text/plain
        response.write(`<h1>no such page</h1>`)
        response.write(`<a href="/">click here</a>`)  //link to home page
        response.end()
    }
} )

server.listen(5000, ()=>{
    console.log("server is running at port 5000")
})