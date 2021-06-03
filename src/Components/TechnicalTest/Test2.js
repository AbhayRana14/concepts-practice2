import React from 'react'

const Test2 = () => {

    function i_am_promise(i_am_boolean){
        return new Promise(function(resolve,reject){
         if(i_am_boolean === 1){
            setTimeout(resolve,3000); 
         }
         else{
             reject("rejected");
         } 
        }).then(function(){
            if({username : "abhay"} === {username :"abhay"})
            {
                console.log("true");
            }
            else{
                console.log("false");
            }
            console.log("done");
        }).catch(function(){
            console.log("rejected");
        })
    }
    // function i_am_promise(i_am_boolean){
    //     const PObj1 = new Promise((resolve,reject)=>{
    //         setTimeout(function (){
    //             if (i_am_boolean){
    //                 let Res = "It is resolved";
    //                 resolve(Res);
    //             }
    //             else{
    //                 let err = "It is not resolved"
    //                 reject(err);
    //             } 
    //         },3000);
    //     });
    //     PObj1.then((Res)=>{
    //         console.log(Res);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
        
    // }
    
    return (
        <div>
            <button onClick={()=>i_am_promise(1)}>Click on mee</button>
        </div>
    )
}

export default Test2
