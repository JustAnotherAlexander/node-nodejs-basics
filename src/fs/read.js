import fs from 'fs'

export const read = async () => {
    fs.readFile("./files/fileToRead.txt", "utf8", (error,data) => {
                if(error) {
                    throw new Error('FS operation failed');
                } else {
                    console.log(data);
                }
            }); 
};

read();