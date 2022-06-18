import fetch from 'node-fetch'
const URL = "https://radioondapopular.com/wp-json/jwt-auth/v1/token"
const token = async (URL) => {
   try{
    let data = {
        "username":"",
        "password":""
     }
    const response = await fetch(URL,{
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
       
    })   
    const json = await response.json()
    return json.token
   }catch(e) {
    console.log(e)
   }
}
 export default token(URL)