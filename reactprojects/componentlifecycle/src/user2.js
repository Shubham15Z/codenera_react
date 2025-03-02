import { Component } from "react"

export default class User2 extends Component{
    constructor()
    {
        super();
        this.state = {
            email : "ajay@gmail.com"
        }
    }

        render()
        {
            console.log("render method in User...", this.state.email);
            console.log("render method in user....", this.props);
            return(
                <div>
                    <h1>User Component</h1>
                    <button onClick={() => this.setState({email : "a.bhan@gmail.com"})}>Update State</button>
                </div>
            )
        }
    
}