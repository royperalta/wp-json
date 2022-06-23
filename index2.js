import fetch from 'node-fetch';

/* const data = async () => {
        const response = await fetch("https://radioondapopular.com/cajamarca/rondas-campesinas-de-cajamarca-rechazan-ley-que-reconoce-a-los-comites-de-autodefensa")
        console.log(await response.status)
}
data() */

const array = [1,2,3,2,5,6,7,8,9,10]

const resultado = array.filter(data=>{
        return data ===12
})
console.log(resultado)