// function DataChange()
// {
//     let data = 'javaScript';

import { useState } from "react";

//     function BtnClick(){
//         data = "React-Js";
//         alert("We Learn : "+data);
//     }
//     return(<>
//             <h1>Hello user</h1>
//             <h2>We Learn : {data}</h2>

//             <button onClick={BtnClick}>Click Me</button>
//         </>)
// }

function DataChange()
{
    const [data, setData] = useState("JavaScript");

    function BtnClick(){
        setData("React");
        alert("We Learn : "+data);
    }
    return(<>
            <h1>Hello user</h1>
            <h2>We Learn : {data}</h2>

            <button onClick={BtnClick}>Click Me</button>
        </>)
}



export default DataChange;