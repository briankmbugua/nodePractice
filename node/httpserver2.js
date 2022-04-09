const http = require('http');
const fs = require('fs')

const port = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('test.html',(error,data)=>{
        if(error) {
             res.writeHead(404)
             res.write('Error: File Not Found')
        } else {
            res.write(data)
        }

        res.end()
    })
})


server.listen(port, (error)=>{
    if(error) {
        console.log('something went wrong', error)

    } else {
        console.log(`server is listening on port ${port}`) 
    }
})
