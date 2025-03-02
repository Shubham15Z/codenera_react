export default function FunctionAsProps(props)
{
    return(
        <div>
            <h1>Function Component</h1>
            <button onClick={props.data}>Click Here</button>&nbsp;
            <button onClick={() => props.data()}> Click </button>
        </div>
    )
}