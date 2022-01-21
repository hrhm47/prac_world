import React from "react";

const Hello=()=>{
   
   // JSX
    // return(
    //     <div>
    //         <h1>Hello from JSX lec</h1>
    //     </div>
    // ) 


    //without JSX
    return React.createElement(
        'div',
        // null, // we can write a specific additional code. like we can pass an object and we can pass a className like this
        {id:'hello', className:'helloclass'},
        React.createElement('h1',null,'Hello From without jsx'))
}

export default Hello