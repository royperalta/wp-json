import fetch from 'node-fetch'
import fs from 'fs'

const download = async (url, filepath) => {
    try{
        const response = await fetch(url, {
            method: 'GET',
            responseType: 'stream'
        })
        return new Promise((resolve, reject) => {
            response.body.pipe(fs.createWriteStream(filepath))
                .on('error', reject)
                .once('close', () => resolve(filepath));
        });
    }catch(e){
        console.log(e)
    }
}


export default download