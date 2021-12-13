const fs=require("fs");

const readStream=fs.createReadStream("./file0.txt","utf-8");
const readStream2=fs.createReadStream("./large.txt","utf-8");

const writeStream=fs.createWriteStream("./file1.txt");

readStream.on("data",(chunk)=>{
    writeStream.write(chunk);
});


/*readFile=fs.readFile("large.txt","utf-8",(err,file)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(file)
    }
});
*/

readStream2.on("data",(chunk)=>{
    console.log(chunk);
});
