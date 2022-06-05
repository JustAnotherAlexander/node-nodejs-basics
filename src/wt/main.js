import {parentPort, Worker} from 'worker_threads';
import os from 'os';

export const performCalculations = async () => {
    let resultArr = [];
    let cpus = os.cpus();
    for (let i=0; i<cpus.length; i++) {
            const worker = new Worker ('./worker.js')
            worker.postMessage(10+i);
            worker.on('message', (msg)=> {
                resultArr.push(msg);
                if (resultArr.length === cpus.length) {
                    resultArr.sort((a,b)=> {
                        return a.data - b.data;
                    })
                    console.log(resultArr);
                }

           })
        }
        
    }

performCalculations();