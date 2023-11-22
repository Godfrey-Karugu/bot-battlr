import React from 'react'
import { useState,useEffect } from 'react'

function BotDisplay() {
  const[data ,setData] =useState([])
  useEffect(()=>{
    fetch( "http://localhost:3002/bots")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])



  const handleDelete = ()=>{
    fetch(`http://localhost:3002/bots/id`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res =>res.json())
    .then(data =>console.log(data))

    //console.log("Hello i am delete")
  }
  return (
    <div className='App'>
      <div className='inner'>
      {
        data.map((item)=>{
          return(
            <div key={item.id} className='box'>
              <img src={item.avatar_url} alt="bot pictur"/><br/>
              {item.name}
              {item.health}
              {item.damage}
              {item.armor}
              {item.bot_class}
              {item.catchphrase}
              {item.created_at}
              {item.updated_at}
              <button onClick={handleDelete} className='btn btn-danger'>X</button>
            </div>
          )
        })
      }

      </div>

    </div>
  )
}

export default BotDisplay