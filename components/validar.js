
import getData from './getData.js'
const URL = "https://www.rcrperu.com/wp-json/wp/v2/posts?categories=25";

const keyword1 = "Cajamarca"
const keyword2 = "Hualgayoc"
const keyword3 = "Anta norte"
const keyword4 = "Chota"
const keyword5 = "Bambamarca"


const data = await getData(URL)
const array = data.filter((data) => {
    const { title, content } = data

    return (
        title.toLowerCase().includes(keyword1.toLowerCase,keyword2.toLowerCase(),keyword3.toLowerCase(),keyword4.toLowerCase(),keyword5.toLowerCase()) ||
        content.toLowerCase().includes(keyword1.toLowerCase(),keyword2.toLowerCase(),keyword3.toLowerCase(),keyword4.toLowerCase(),keyword5.toLowerCase())
        /*  title.toLowerCase().includes(keyword1.toLowerCase()) || content.toLowerCase().includes(keyword1.toLowerCase()) ||
        title.toLowerCase().includes(keyword2.toLowerCase()) || content.toLowerCase().includes(keyword2.toLowerCase()) ||
        title.toLowerCase().includes(keyword3.toLowerCase()) || content.toLowerCase().includes(keyword3.toLowerCase()) ||
        title.toLowerCase().includes(keyword4.toLowerCase()) || content.toLowerCase().includes(keyword4.toLowerCase()) ||
        title.toLowerCase().includes(keyword5.toLowerCase()) || content.toLowerCase().includes(keyword5.toLowerCase()) */
    )
})
export default array


