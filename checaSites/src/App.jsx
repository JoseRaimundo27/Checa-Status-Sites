import { useState } from 'react'
import { getLinks, getJson, getJsonComStatus, getStatusLinks } from './scripts/processaDados.js'
import Tabela from './components/tabela.jsx'
import cors from "cors"
import './App.css'


const urls = await getLinks("'../data/sites.json'")
const jsonSites = await getJson('../data/sites.json')
const arrStatus = await getStatusLinks(urls)
const jsonComStatus = await getJsonComStatus(jsonSites, arrStatus)
console.log(jsonComStatus)
function App() {


  return (
    <>
      <section className="container">
        <table className="container__tabela" border="1">
          <thead>
            <tr>
              <th className='container__tabela__titulo'>Nome Site</th>
              <th className='container__tabela__titulo'>Status Code</th>
              <th className='container__tabela__titulo'>Status </th>
            </tr>
          </thead>
          <tbody className='container__tabela__body'>
              {jsonComStatus.map((obj) => {
                console.log(obj)
                return (<Tabela nome={obj.nome} status={obj.status} ></Tabela>)
              })}
          </tbody>
        </table>
      </section>

    </>
  )
}

export default App
