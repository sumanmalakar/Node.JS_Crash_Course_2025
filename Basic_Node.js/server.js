import http from 'http'
import { config } from 'dotenv';

config();

const server = http.createServer((req,res)=>{
    // console.log('our server is stablished successfully..!')
    // const date = new Date();
    // console.log("Request time  ",date)
    // res.end("<h1>Thank you for your request</h1>");
    // console.log("user request ",req.url)
    if(req.url === '/'){
        res.end("You are request for home route")
    }else if(req.url === '/products'){
        res.end('you are looking for products')
    }else{
        res.end("Invalid request")
    }

});

const port = process.env.PORT;
server.listen(port,()=>console.log(`Server is running on port ${port}`))