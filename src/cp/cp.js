import {fork} from 'child_process'

export const spawnChildProcess = async (args) => {
    console.log('Start of the main process');
    const child = fork('./files/script.js',[args]);
    child.send(process.stdin);
};

spawnChildProcess(process.argv.slice(2,process.argv.length));