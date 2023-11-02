import React, { useState } from "react";
import '../style/Counter.css'


export default function Counter({total,totalCount}){
  let [count,setCount]=useState(0);

  function increment(){
    setCount(count=>count+1)
  }
  return(
    <div className="counter">
      <span>{count} /<span className="subTotal"> {totalCount}</span></span><br />
    {/*  <button onClick={
        (e)=>{
          increment()
          increment()
          increment()
        }
        }>+3</button> */}
      <button onClick={
        (e)=>{
          increment()
          total()
        }
        }>Add +1</button>
    </div>
  )
}