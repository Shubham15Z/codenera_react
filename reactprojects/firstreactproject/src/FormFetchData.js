import { useState } from "react";

function FormFetchData()
{
    const[name, setName] = useState("");
    const[city, setCity] = useState("");
    const[status, setStatus] = useState(false);

    function getFromData(e)
    {
        console.log(name,city,status);
        e.preventDefault();
    }
    return(
        <>
            <h1>Registration Form</h1>
            <form onSubmit={getFromData}>
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} /><br/><br/>

                <select onChange={(c) => setCity(c.target.value)}>
                    <option>Select City</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Nagpur</option>
                </select><br /><br />

                <input type="checkbox" onChange={(c) => setStatus(c.target.checked)} /> <b>Terms and Conditions</b><br/><br />

                <button type="submit">Submit</button>

            </form>
        </>
    )

}

export default FormFetchData;