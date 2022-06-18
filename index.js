import array from './components/validar.js'
import fetch from 'node-fetch'
import publicar from "./components/publicar.js"


const operacion = async () => {
    try {
        const datos = await array
        Promise.all(
            datos.map(async (data) => {
                const { slug } = data
                const response = await fetch(`https://radioondapopular.com/cajamarca/${slug}`, {
                    method: 'GET'
                })
                const { status } = response
                status === 404 ? publicar(data) : console.log("no se puede publicar")
                //publicar(data.title, data.content,data.image)
            })
        )
    } catch (e) {
        console.log(e)
    }

}
setInterval(() => {
    operacion()
}, 10000)
