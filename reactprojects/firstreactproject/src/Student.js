function Student(props)
{
    return(
        <>
            <h1>Student Component</h1>
            <h3>First name : {props.fname}</h3>
            <h3>Last name : {props.lname}</h3>
            <h3>City name : {props.address.city}</h3>
            <h3>State name : {props.address.state}</h3>
            <h3>Country name : {props.address.country}</h3>
            <h3>Age : {props.age}</h3>
        </>
    )
}

export default Student;