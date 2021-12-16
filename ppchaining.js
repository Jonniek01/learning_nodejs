const fs=require("fs");
const zlib=require("zlib");
const gzip=zlib.createGzip();

// const readStream=fs.createReadStream("./file0.txt","utf-8");

// const writeStream=fs.createWriteStream("./file1.txt.gz");

// readStream.pipe(gzip).pipe(writeStream);

const gunzip=zlib.createGunzip();

const readStream1=fs.createReadStream("./file1.txt");

const writeStream1=fs.createWriteStream("./file3.txt");

readStream1.pipe(gunzip).pipe(writeStream1);