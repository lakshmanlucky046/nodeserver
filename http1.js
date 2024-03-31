const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const requestMethod=function(req,res){
    res.statusCode=200;
    res.setHeader('contenet-type','text');
    res.write("Welcome Host\n");
    console.log('Client connected');
    if(req.method === 'POST'){
        res.end("Requested POST method");
    }
    if(req.method === 'GET'){
        res.end("Requested GET method");
    }
}
const server=http.createServer(requestMethod);
server.listen(port,hostname);