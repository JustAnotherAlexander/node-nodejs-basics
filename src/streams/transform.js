import { Transform } from 'stream';
import util from 'util';

export const transform = async () => {      
    let Test = new Transform({
        transform(chunk, encoding, callback) {
            var revertChunk = chunk.reverse();
            this.push(revertChunk);
            cb();
        },
      });
      Test._transform = function (chunk, enc, cb) {
        var revertChunk = chunk.reverse();
        this.push(revertChunk);
        cb();
      };
      process.stdin.pipe(Test).pipe(process.stdout);
    }
    
transform();