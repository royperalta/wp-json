import fetch from 'node-fetch'
import token from './getToken.js'
import download from './download.js'
import upLoad from './upImage.js'

const publicar = async (data) => {
    try {
        console.log(data)
        await download(data.urlImage, `images/${data.featured_media}.jpg`)
        const idImage = await upLoad(data.featured_media)
        let todo = {
            title: data.title,
            content: data.content,
            status: "publish",
            categories: 39,
            featured_media: idImage
        }

        const response = await fetch("https://radioondapopular.com/wp-json/wp/v2/posts/", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        console.log(await response.json())
        const { status } = await response.json()
        console.log(status)
    } catch (e) {
        console.log(e)
    }

}

export default publicar

