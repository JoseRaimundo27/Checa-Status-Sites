import {getLinks,getJson,getJsonComStatus, getStatusLinks} from "./processaDados.js"

const urls = await getLinks('sites.json')
const jsonSites = await getJson("sites.json")
const arrStatus = await getStatusLinks(urls)




console.log(jsonComStatus)
console.log(jsonSites)


