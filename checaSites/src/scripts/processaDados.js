import sitesObj from "../data/sites.json"  assert {type: "json"}




export async function getLinks(path) {
    try {
        const urls = sitesObj.map((objeto) => {
            return objeto.url
        })
        return urls
    } catch (error) {
        console.error("Erro ao ler arquivo", error)
        return
    }
}
export async function getStatusLinks(url) {
    //Criando array de promises com fetch
    const arrPromises = url.map((link) => {
        return fetch(link)
    })
    console.log(arrPromises)
    //Resolvendo o array de promises
    const arrayStatus = await Promise.all(arrPromises).then((values) => {
        const arrStatus = values.map((obj) => {
           
            return obj.status
        })
        
        return arrStatus
    })
    return arrayStatus
}
export async function getJsonComStatus(json,statusLinks){
    const objetoNovo = json.map( (objeto,indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))
    return objetoNovo
}
export async function getJson(path) {
    try {
        return sitesObj
    } catch (error) {
        console.error("Erro ao ler arquivo", error)
        return
    }
}
