import {getLinks,getJson, getStatusLinks} from "./processaDados.js"

const urls = await getLinks('sites.json')
const status = await getStatusLinks(urls)

console.log(status)
