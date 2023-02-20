const fs = require('fs')
console.log("hello word")

fs.readFile('./azerty.txt','utf-8',(err,data)=>{
         if(err){
             console.log(err)
         }else{
             console.log(data)
         }
     })
    

const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>hello node</h1>')
    res.end()
}).listen(5000,console.log("Server is running"))