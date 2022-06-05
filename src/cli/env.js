export const parseEnv = () => {
    for (let i in process.env) {
        let key = i.slice(0,4);
        if (key === 'RSS_') {
            console.log(`${i}=${process.env[i]}`)
        }
    }
    
};

parseEnv();