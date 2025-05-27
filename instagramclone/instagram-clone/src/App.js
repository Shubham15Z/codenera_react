import logo from './logo.svg';
import './App.css';
import LeftSide from './component/LeftSide';
import MiddleSide from './component/MiddleSide';

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide/>
      </div>
      <div className="middleSide">
        <MiddleSide/>
        
      </div>
      <div className="rightSide">Right side</div>
    </div>
  );
}

export default App;
