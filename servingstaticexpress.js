const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const path=require("path");
const Joi=require("joi");

app.use("public",express.static(path.join(__dirname,"static")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"static","static.html"))

});
app.use(bodyParser.json());


app.post("/",(req,res)=>{
    const schema=Joi.object().keys({
        email:Joi.string().trim().email().required(),
        password:Joi.string().min(5).max(10).required()
    });
    const { error } = schema.validate(req.body);
    if(error){
        res.json("unsuccesful "+error);


    }
    else{
        console.log("succesfully posted data, email:" +req.body.email);


    }
})
app.listen(3000);