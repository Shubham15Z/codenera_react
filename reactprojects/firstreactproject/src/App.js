import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import DataChange from './DataChange';
import DataClassComponent from './DataClassComponent';
import PropWithState from './PropWithState';
import Student from './Student';
// import JsxDemo from './JsxDemo';

import { User } from './User';
import User1 from './User1';
import FunctionToClass from './FunctionToClass';
import HideShow from './HideShow';
import Toggle from './Toggle';
import FormFetchData from './FormFetchData';
import ConditionalRender from './ConditionalRender';
import FunctionAsProps from './FunctionAsProps';

function App() {

  const [data,setData] = useState(null);
   const[print,setPrint] = useState(false);

   function getData(val)
   {
    setData(val.target.value);
    // setPrint(false);
  }

  function getData()
  {
    alert("This is alert function call");
  }
  return(
    <div className='App'>

      <h1> Welcome</h1>

       {/* {
         print ? <h1>{data} </h1> : null
       }
      <input type= "text" onChange={getData}/> 
      
      <button onClick={ () => setPrint(true) }> Print </button> */}
      {/* <HideShow/> */}
      {/* <Toggle/> */}
      {/* <FormFetchData/> */}
      {/* <ConditionalRender/> */}
      <FunctionAsProps data= {getData}/>
       </div>
  )

  // function Inner(){
  //   return(
  //     <h2>This is Inner function.</h2>
  //   )
  // }

  // function BtnClick(){
  //   alert("This is alert box");
  // }

  // const [name, setName] = useState("Ajay");
  // const [age, setAge] = useState(28);
  // return (
  //   <div className="App">

  //     {/* <User/>
  //     <Inner/> */}
    
  //      {/* <User1/> */}

  //      {/* <JsxDemo/> */}

  //      {/* <button onClick={() => alert("This is alert Box")}>
  //         Click Me
  //      </button> */}
  //      {/* <button onClick= {alert("This is alert Box")}>
  //         Click Me
  //      </button> */}
  //      {/* <button onClick= {BtnClick()}>
  //         Click Me
  //      </button> */}
  //      {/* <button onClick= {BtnClick}>
  //         Click Me
  //      </button> */}

  //      {/* <DataChange/> */}

  //      {/* <Counter/> */}

  //      {/* <DataClassComponent/> */}

  //      {/* <Student fname="Ajay" lname="Sharma" 
  //      age="24" address={{city:"Hydrabad", state:"Telangana", country:"India"}} />
  //      <Student fname="Rahul" lname="Roy" 
  //      age="30" address={{city:"Mumbai",state:"Maharashtra", country:"India"}} /> 
  //      */}

  //      {/* <PropWithState name={name}/>

  //       <button onClick={() => setName("Raj")}>Change Name</button> */}

  //       <FunctionToClass name={name} age={age}/>

  //       <button style={{backgroundColor:'blue', color:'white'}} onClick={() => {setName("Rahul"); setAge(32)}}>Change Data</button>
  //   </div>
  // );
}

export default App;
