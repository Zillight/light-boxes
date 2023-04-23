import './App.css';
import React, {useState} from 'react';
import boxes from "./boxes"
import Box from "./Components/Box"

function App() {
  const [squares, setSquares] = useState(boxes)

  function toggle(id){
    setSquares(prevSquare => {
      return prevSquare.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const boxElements = squares.map(box => (
    <Box 
    key={box.id}
    on={box.on}
    handleClick={()=>toggle(box.id)}
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
