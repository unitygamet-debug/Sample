
import http from "http";
const myserver=http.createServer((req,res) =>{
    console.log("hello kunal")
})

myserver.listen(8000,() => console.log("Server started bro"))