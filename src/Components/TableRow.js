import React from 'react'

function TableRow({id,name,health,damage,armor,bot_class,catchphrase,created_at,updated_at,avatar}) {
  return (
    <tr>
                                <th scope="row">{id}</th>
                                <td>{name}</td>
                                <td>{health}</td>
                                <td>{damage}</td>
                                <td>{armor}</td>
                                <td>{bot_class}</td>
                                <td><img src={avatar} alt="imag"/></td>
                                <td>{catchphrase}</td>
                                <td>{created_at}</td>
                                <td>{updated_at}</td>
    </tr>
  )
}

export default TableRow