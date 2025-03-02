import logo from './logo.svg';
import './App.css';
import { Component, useState } from "react";
import User2 from './user2';




// function App()
// {
//   const [name, setName] = useState("Ajay");

//   return(
//     <div className='App'>
//       <h1>Render Method in react</h1>
//       <User2 name={name}/>
//       <button onClick={ () => setName("Bhan")}>Update</button>
//     </div>
//   )
// }

// class App extends Component{
//   constructor()
//   {
//     super();
//     console.log("Inside constructor..");
//     this.state = {
//       name:"Rahul"
//     }
//   }

//   componentDidMount()
//   {
//     console.log("Inside component did mount method...");
//   }
//   render()
//   {
//     console.log("Inside render...");
//     return (
//       <div>
//           <h1>Component did Mount {this.state.name}</h1>
//           <button onClick={() => {this.setState({name:"Vishal"})}}>Click Me</button>
//       </div>
        
      
//     );
//   }
  
// }


// class App extends Component{
//   constructor()
//   {
//     super();
//     console.log("Inside constructor..");
//     this.state = {
//       count:0
//     }
//   }

//   componentDidUpdate(preProps,preState,snapshots)
//   {
//     console.log("Inside component did Update method...",preState.count,this.state.count);
//     if(this.state.count < 10)
//     {
//       this.setState({count : this.state.count + 1})
//     }
//   }
//   render()
//   {
//     // console.log("Inside render...");
//     return (
//       <div>
//           <h1>Component did Update {this.state.count}</h1>
//           <button onClick={() => {this.setState({count: 1})}}>Update Count</button>
//       </div>
        
      
//     );
//   }
  
// }

class App extends Component{
  constructor()
  {
    super();
    console.log("Inside constructor..");
    this.state = {
      count:1
    }
  }

  shouldComponentUpdate()
  {
    console.log("Inside should component Update method...",this.state.count);
    if(this.state.count > 4 && this.state.count <= 10)
    {
      return true
    }
    return false;
  }
  render()
  {
    // console.log("Inside render...");
    return (
      <div>
          <h1>Should Component Update {this.state.count}</h1>
          <button onClick={() => {this.setState({count: this.state.count+1})}}>Update Count</button>
      </div>
        
      
    );
  }
  
}


export default App;
