import React from 'react'

const Test1 = () => {
  function RunTest1(obj,cb){
    console.log(obj.name);
    cb();
  }
  const obj = { name: 'Abhay', lname: 'Rana' };
  function cb(){
    console.log("i am done with my task thankyou.")
  }
  function RunTest2(bool){
    const pobj = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(bool === 1){
            resolve("message");
          }
          else{
            reject("error");
          }
        },2000);
    });
    pobj.then((message)=>{
      debugger;
      console.log(message);
    }).catch((error)=>{
      console.log(error);
    });
  }
  function RunTest3(){
    function multiply(a,b){
      return a*b;
    }
    function currying(fn){
      return function(a){
        return function(b){
          return fn(a,b);
        }
      }
    }
    var curriedMultiply = currying(multiply);
    let ok = curriedMultiply(3)(4);
    console.log(ok);
  }

  function RunTest4(ok){
    var numb = ok;
    if(numb <=0){
      return 0;
    }
    else{
      let result = numb + RunTest4(numb-1);
      console.log(result);
      return result;
    };
  }
  return (
    <div>
      <button onClick={()=>RunTest1(obj,cb)}>ques1</button>
      <button onClick={()=>RunTest2(1)}>ques2</button>
      <button onClick={()=>RunTest3()}>ques3</button>
      <button onClick={()=>RunTest4(3)}>ques4 </button>
      {RunTest4(3)}
    </div>
  )
}

export default Test1

