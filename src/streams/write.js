import fs from 'fs'

export const write = async () => {
  
    let writeableStream = fs.createWriteStream("./files/fileToWrite.txt");
      
    process.stdin.pipe(writeableStream);
};

write();