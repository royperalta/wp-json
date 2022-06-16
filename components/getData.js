import fetch from 'node-fetch';

const noticia = []

const response = async (URL) => {
    const resultado = await fetch(URL)
    const json = await resultado.json()
    await Promise.all(
        json.map(async data => {
            const media = await fetch(`https://rcrperu.com/wp-json/wp/v2/media/${data.featured_media}`)
            const jsonMedia = await media.json()
            const imageUrl = jsonMedia.source_url
            let objeto = {
                id: data.id,
                title: data.title.rendered,
                content: data.content.rendered,
                image: imageUrl
            }
            noticia.push(objeto)
        }))
    return noticia
}

response("https://www.rcrperu.com/wp-json/wp/v2/posts?categories=25").then(data => { console.log(data) })

