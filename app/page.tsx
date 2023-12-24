"use client"

import React,{useState} from "react";

const Home = ()=>{
  const [count,setCount]=useState(0);
  
  const increament =()=>{
    setCount(count+1);
  };
  const decrement=()=>{
    setCount(count-1);
  };
  
  return(
    <div className="flex flex-col ">
      <label className="m-2 ">{count}</label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={increament}>+1</button>
      <button className="m-2 btn btn-blue" onClick={decrement}>-1</button>
    </div>
    )
  
  
  
}
export default Home;

"use client"

import React {useState} from 'react';

const Home =()=>{
  const [count,setCount]=useState(0);
  const increament =()=>{
    setCount(count+1);
  }
  const decrement =()=>{
    setCount(count-1);
  }
  return(
    <div>
      <label>{count}</label>
      <button onClick={increament}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
    )
}

