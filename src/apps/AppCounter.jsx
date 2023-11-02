import React, { useState } from "react";
import "./App.css";
// import Profile from './component/Profile.jsx'
import Counter from "../component/Counter.jsx";

function App() {
  let [totalCount, setTotalCount] = useState(0);
  const handleClick=e=>{setTotalCount(count=>count+1)}

  return (
    <>
      <div className="container">
        <div className="banner">Total : {totalCount}</div>
        <Counter total={handleClick} totalCount={totalCount}></Counter>
        <Counter total={handleClick} totalCount={totalCount}></Counter>
        <Counter total={handleClick} totalCount={totalCount}></Counter>
        <Counter total={handleClick} totalCount={totalCount}></Counter>
        <Counter total={handleClick} totalCount={totalCount}></Counter>
        <Counter total={handleClick} totalCount={totalCount}></Counter>
      </div>
    </>
  );
}

export default App;
