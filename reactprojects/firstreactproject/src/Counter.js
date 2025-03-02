import { useState } from "react"

function Counter()
{
    const [data, setData] = useState(0);

    function increment()
    {
        setData(data+1);
    }

    function decrement()
    {
        setData(data-1);
    }


    return(
        <>
            <h1>Hello User</h1>
            <button onClick={increment}>Increment</button>
            <h2>Counter : {data}</h2>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter;