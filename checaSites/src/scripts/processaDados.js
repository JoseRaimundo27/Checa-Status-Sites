import fs from "fs"

export async function getStatusLinks(url) {
    //Criando array de promises com fetch
    const arrPromises = url.map((link) => {
        return fetch(link)
    })
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
export async function getLinks(path) {
    try {
        const sites = await fs.promises.readFile(path, 'utf8');
        const sitesObj = JSON.parse(sites);
        const urls = sitesObj.map((objeto) => {
            return objeto.url
        })
        return urls
    } catch (error) {
        console.error("Erro ao ler arquivo", error)
        return
    }
}
export async function getJson(path) {
    try {
        const sites = await fs.promises.readFile(path, 'utf8');
        const sitesObj = JSON.parse(sites);
        return sitesObj
    } catch (error) {
        console.error("Erro ao ler arquivo", error)
        return
    }
}
