import fs from 'fs';

export const read = async () => {
    let readableStream = fs.createReadStream("./files/fileToRead.txt", "utf8");      
    readableStream.pipe(process.stdout);
};

read();