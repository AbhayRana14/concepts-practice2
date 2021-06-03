import React from 'react'

const Test1 = () => {

    function x(username,age){
    setTimeout(function(){
        console.log("i am done waiting, thankyou");
        },3000);
    }
    
    return (
        <div>
            <button onClick={x("Abhay",21)}>Click on me</button>
        </div>
    )
}

export default Test1
