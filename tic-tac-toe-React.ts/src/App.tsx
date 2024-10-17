import React,{useState} from 'react';
import './App.css';
import Block from './components/block';
import './App.css'

function App() {
  const [state, setState] = useState(Array(9).fill(null))
  const[currentTurn,setCurrentTurn] = useState("X");

  const checkWinner = (state: any[]) =>{
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i=0; i < win.length; i++){
      const [a,b,c] = win[i];
      if (state[a]!==null && state[a] === state[b] && state[a] === state[c] ) return true;
    }
    return false;
  }

  const handleBlockClick = (index:number)=>{
    const stateCopy = [...state]

    if(stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;

    const win = checkWinner(stateCopy);
    if(win){
      alert(`${currentTurn} Won the Game!!`)
    }

    setCurrentTurn(currentTurn === "X" ? "O" : "X")
    setState(stateCopy)
  }

  return (
    <div className="board">

      <div className="row">
        <Block OnClick={()=>handleBlockClick(0)} value={state[0]}/>
        <Block OnClick={()=>handleBlockClick(1)} value={state[1]}/>
        <Block OnClick={()=>handleBlockClick(2)} value={state[2]}/>
      </div>

      <div className="row">
        <Block OnClick={()=>handleBlockClick(3)} value={state[3]}/>
        <Block OnClick={()=>handleBlockClick(4)} value={state[4]}/>
        <Block OnClick={()=>handleBlockClick(5)} value={state[5]}/>
      </div>

      <div className="row">
        <Block OnClick={()=>handleBlockClick(6)} value={state[6]}/>
        <Block OnClick={()=>handleBlockClick(7)} value={state[7]}/>
        <Block OnClick={()=>handleBlockClick(8)} value={state[8]}/>
      </div>
    </div>
  );
}

export default App;
