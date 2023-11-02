import './App.css';
import Product from './component/Product';
import React,{useState} from 'react'

export default function AppToggle() {
  const [showPd,setShowPd]=useState(false)
  function handleClick(){
    setShowPd(s=>!s) 
  }
  return <>
    <button onClick={handleClick}>Toggle</button>
    {showPd&&<Product/>}
  </>;
}
