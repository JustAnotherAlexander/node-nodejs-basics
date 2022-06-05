import fs from 'fs'
import zlib from 'zlib'

export const compress = async () => {
    
let readableStream = fs.createReadStream("./files/fileToCompress.txt", "utf8");
  
let writeableStream = fs.createWriteStream("./files/archive.gz");
  
let gzip = zlib.createGzip();
  
readableStream.pipe(gzip).pipe(writeableStream);
};

compress();