import fetch from 'node-fetch'
import token from './getToken.js'
import fs from 'fs'
const URL = "https://radioondapopular.com/wp-json/wp/v2/media"
const upLoad = async (featured_media) => {
    try {
        const path = `images/${featured_media}.jpg`
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await token}`,
                'content-type': 'image/jpeg',
                'content-disposition': 'attachment; filename="file.jpg"',
            },
            body: fs.readFileSync(path, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data)
                }
            })
        })

        const { id } = await response.json()
        return id

    } catch (e) {
        console.log(e)
    }
}

export default upLoad