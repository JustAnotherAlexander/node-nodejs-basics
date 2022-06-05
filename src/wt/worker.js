import {workerData, parentPort} from 'worker_threads';
let result = {
    status: null,
    data: null
}
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on('message',(n)=>{
    try{
        result.data = nthFibonacci(n);
        result.status = 'resolved';
    }
    catch{
        result.data = null;
        result.status = 'error'
     }
    sendResult();
});


export const sendResult = () => {
   parentPort.postMessage(result);
   //console.log(result)
};