import './App.css';
import { User } from './User';

function App() {

  function Inner(){
    return(
      <h2>This is Inner function.</h2>
    )
  }
  return (
    <div className="App">

      <User/>
      <Inner/>
      {/* <User/>
      <User/> */}
    </div>
  );
}

export default App;
