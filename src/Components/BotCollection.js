import React from 'react'
import TableRow from './TableRow'
import { useState,useEffect } from 'react'


function BotCollection() {

  const[data ,setData] =useState([])
  useEffect(()=>{
    fetch( "http://localhost:3002/bots")
    .then(res=>res.json())
    .then(data=>setData(data))
    console.log(data)
  },[])
  return (
    <div>
      <h5 className="text-center mt-4">bot display</h5>
            <table className="table">
                <thead>
                      <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Health</th>
                            <th scope="col">damage</th>
                            <th scope="col">armor</th>
                            <th scope="col">bot_class</th>
                            <th scope="col">avatar</th>
                            <th scope="col">catchphrase</th>
                            <th scope="col">created_at</th>
                            <th scope="col">updated_at</th>
                      </tr>
                </thead>
                <tbody>
                     {
                      data.map((item)=>{
                        return(
                          <TableRow key={item.id}
                            id = {item.id}
                            name ={item.name}
                            health ={item.health}
                            damage = {item.damage}
                            armor ={item.armor}
                            bot_class ={item.bot_class}
                            avatar={item.avatar_url}
                            catchphrase={item.catchphrase}
                            created_at={item.created_at}
                            updated_at={item.updated_at}

                          />
                        )
                      })
                     }
                
                </tbody>
               
              </table>
    </div>
  )
}

export default BotCollection