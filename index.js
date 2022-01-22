//setting up an http server with express

const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello word from express");

});
app.get("/example",(req,res)=>{
    res.send("hello word from express example route");

});

app.listen(3000);