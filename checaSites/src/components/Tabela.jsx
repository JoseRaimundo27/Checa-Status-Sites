import React from 'react'

export default function Tabela(props) {
    return (
        <>
            <td className="container__tabela__conteudo">{props.nome}</td>
            <td className="container__tabela__conteudo">{props.status}</td>
            <td className="container__tabela__conteudo">OK</td>
        </>
    )
}
