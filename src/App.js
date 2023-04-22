import './App.css';
import React, {useState} from 'react';
import boxes from "./boxes"
import Box from "./Components/Box"

function App() {
  const [squares, setSquares] = useState(boxes)

  function toggle(){
    console.log("Clicked!")
  }

  const boxElements = squares.map(box => (
    <Box 
    key={box.id}
    on={box.on}
    handleClick={toggle}
    />
  ))
  return (
    <div 
    className="App"
    >
      {boxElements}
    </div>
  );
}

export default App;
