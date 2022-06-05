import fs from 'fs'

export const rename = async () => {
    fs.access('./files/wrongFilename.txt', err => {
        if (err) throw new Error('FS operation failed!');
        else {
            fs.access('./files/properFilename.md', err => {
                if (err) {
                    fs.rename('./files/wrongFilename.txt', './files/properFilename.md', err => {
                        if (err) throw new Error('FS operation failed while rename');
                    });
                } else {
                    throw new Error('FS operation failed');
                }
            })
        }
    }) 
};

rename();