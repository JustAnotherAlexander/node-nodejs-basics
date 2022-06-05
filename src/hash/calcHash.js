import crypto from 'crypto'

export const calculateHash = async () => {
    let hash = crypto.createHash('sha256');
    hash.update('./files/fileToCalculateHashFor.txt');
    console.log(hash.digest('hex'));
};

calculateHash();