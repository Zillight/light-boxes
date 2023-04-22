import './App.css';
import React, {useState} from 'react';
import boxes from "./boxes"

function App(props) {
  const [squares, setSquares] = useState(boxes)

  const styles = {
    backgroundColor: "black"
  }

  const boxElements = squares.map(box => (
    <div style={styles} className="boxes" key={box.id}></div>
  ))
  return (
    <div className="App">
      {boxElements}
    </div>
  );
}

export default App;
