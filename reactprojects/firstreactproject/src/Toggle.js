import { useState } from "react";

function Toggle()
{
    const[status, setStatus] = useState(true);
    return(
        <>
            {
              status ? <h1>Hello React</h1> : null
            }
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </>
    )
    
    
}

export default Toggle;