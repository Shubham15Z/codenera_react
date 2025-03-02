import { Component } from "react";

export default class FunctionToClass extends Component
{
    render(props)
    {
        return(
            <div style={{backgroundColor: 'lightgrey'}}>
                <h1>Class Component Student Data :</h1>

                <h3>Name : {this.props.name}</h3>
                <h3>Age : {this.props.age}</h3>
            </div>
        )
    }
}