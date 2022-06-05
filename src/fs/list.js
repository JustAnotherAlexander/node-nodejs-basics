import fs from 'fs';

export const list = async () => {

    let files = fs.readdir('./files', (err, result) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            for (let i in result) {
                console.log(result[i]);
            }
        }
    });
};

list();