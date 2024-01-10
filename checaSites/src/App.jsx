import { useState } from 'react'
import { getLinks,getJson,getJsonComStatus,getStatusLinks } from './scripts/processaDados.js'
import Tabela from './components/tabela.jsx'
import './App.css'

const urls = await getLinks("'../data/sites.json'")
console.log(urls)
function App() {


  return (
    <>
        <section className="container">
        <table className="container__tabela" border="1">
        <tr>
          <td className='container__tabela__titulo'>Nome Site</td>
          <td className='container__tabela__titulo'>Status Code</td>
          <td className='container__tabela__titulo'>Status do Site</td>
        </tr>
        <tr>
          <Tabela nome="fala salvador" status="200" ></Tabela>
        </tr>
        </table>
        </section>

    </>
  )
}

export default App
