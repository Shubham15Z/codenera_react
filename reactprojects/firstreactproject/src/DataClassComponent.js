import { Component } from "react";

class DataClassComponent extends Component
{
    

    constructor()
    {
        super();
        this.state = {data: "javascript",data1:0};
    }

    BtnClick()
    {
        this.setState({data:"react"});
    };

    increment()
    {
        this.setState({data1: this.state.data1+1});
    }

    decrement()
    {
        this.setState({data1: this.state.data1-1});
    }

    render(){
        return(
            <>
                <h1>Class Component Data Update</h1>
                <h2>This is : {this.state.data}</h2>
                <button onClick={ ()=> this.BtnClick()}>Click Me</button><br /><br />
                <button onClick={() => this.increment()}>Increment</button>
                <h2>Counter : {this.state.data1}</h2>
                <button onClick={() => this.decrement()}>Decrement</button>
            </>
        );
    };
}

export default DataClassComponent