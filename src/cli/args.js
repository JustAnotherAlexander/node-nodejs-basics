export const parseArgs = () => {
console.log('process.argv: ', process.argv);
console.log(process.argv.length);
for (let i = 2; i < process.argv.length; i += 2 ) {
   let propName = process.argv[i].slice(2,process.argv[i].length);
    console.log(`${propName} is ${process.argv[i+1]}`)
}
};

parseArgs();