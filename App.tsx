import * as React from 'react';
import './style.css';
import {useState} from "react"

export default function App() {
  const [count,setCount]=useState(0)
  const countButton = () => {
    setCount(count+1)
  }
  const countDown = () => {
    setCount(count-1)
  }

  return (
    <div>
      <h1>カウンター</h1>
      <p>{count}</p>
      <button onClick={countButton}>カウントアップ</button><br/>
     <button onClick={countDown}>カウントダウン</button>
    </div>
  );
}
