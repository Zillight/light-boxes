import './App.css';
import React, {useState} from 'react';
import boxes from "./boxes"

function App() {
  const [squares, setSquares] = useState(boxes)

  const boxElements = squares.map(box => (
    <div className="boxes" key={box.id}></div>
  ))
  return (
    <div className="App">
      {boxElements}
    </div>
  );
}

export default App;
