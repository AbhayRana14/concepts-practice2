import React from 'react'
import './Test3.css'

const Test3 = () => {
    const Typo = (() => {
        console.log(typeof(undefined));
        console.log(typeof("ok"));
        console.log(typeof(28));
        console.log(typeof(0));
        console.log(typeof({ab :"ab"}));
        console.log(typeof(Symbol));
        console.log(typeof(null));
        console.log(typeof(function cb(){}));
        console.log(typeof([21]));
        console.log(typeof(BigInt));
    })();
    return (
        <div className="main-div">
            <div className="child-div">
                <h1>College Duniya</h1>
                <h3>Technical test 1</h3>
            </div>
        </div>
    )
}

export default Test3
