import React, { useState } from 'react'
import { findDOMNode } from 'react-dom'
import './Test2.css'

const Test2 = () => {
    const [val1,setVal1] = useState(0);
    const [val2,setVal2] = useState(0);
    const getVal1 = (value) =>{
      setVal1(value);
    }
    const getVal2 = (value) =>{
        setVal2(value);
    }
    const findAdd = (val1,val2) => {
         console.log(   Number(val1)+Number(val2));
        //console.log(val1+val2);
    }
    return (
        <div className="main">
            <div className="sq sq1">
                <span></span>
            </div>
            <div className="sq">
                <span></span>
            </div>
            <div className="sq">
                <span></span>
            </div>
            <input type="text" value={val1} onChange={(e)=>getVal1(e.target.value)}></input>
            <input type="text"  value={val2} onChange={(e)=>getVal2(e.target.value)}></input>
            <button onClick={()=>findAdd(val1,val2)}>Find Greatest Common divisor</button>
        </div>
    )
}

export default Test2
