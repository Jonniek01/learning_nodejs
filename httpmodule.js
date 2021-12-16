const http=require("http");
const server=http.createServer((req,res)=>{
    if (req.url==="/"){
        res.write("hello world from node js home page");
        res.end();
    }
    else if (req.url==="/about"){
        res.write("about page");
        res.end();
    }
    else{
        res.write("hello world from node js some other page");
        res.end();
   }

});

server.listen("3000");