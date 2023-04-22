import './App.css';
import React, {useState} from 'react';
import boxes from "./boxes"
import Box from "./Components/Box"

function App() {
  const [squares, setSquares] = useState(boxes)

  const boxElements = squares.map(box => (
    <Box 
    key={box.id}
    on={box.on}
    />
  ))
  return (
    <div className="App">
      {boxElements}
    </div>
  );
}

export default App;
