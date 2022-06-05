import fs from 'fs'

export const create = async () => {
    fs.access('fresh.txt', (error)=>{
        if (error) {
            fs.open('fresh.txt', 'w', (err) => {
                if (err) {
                    throw new Error('FS operation failed while creating a new file');
                }
            });
            fs.writeFile('fresh.txt', 'I am fresh and young', (err) => {
                if (err){
                    throw new Error('FS operation failed while writing the text into the fresh.txt');
                }
            });
        } else {
            throw new Error('FS operation failed');
        }
    })
    
};

create();