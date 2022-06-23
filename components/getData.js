import fetch from 'node-fetch';

const response = async (URL) => {
    const noticia = []
    try {
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
                    slug: data.slug,
                    featured_media: data.featured_media,
                    urlImage: imageUrl
                }
                noticia.push(objeto)

            }))
        return noticia
    } catch (e) {
        console.log(e)
    }
}

export default response
