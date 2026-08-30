import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buttons = [
  {
    name: "Increment",
    symbol: "+",
    action: "increment",
  },
  {
    name: "Decrement",
    symbol: "-",
    action: "decrement",
  },
  {
    name: "Multiply by 4",
    symbol: "×",
    action: "multiply",
  },
  {
    name: "Divide by 5",
    symbol: "÷",
    action: "divide",
  },
  {
    name: "Square",
    symbol: "x²",
    action: "square",
  },
  {
    name: "Square Root",
    symbol: "√",
    action: "sqrt",
  },
];
const handleClick = (action)=>{
  switch (action){
    case "increment":
      setCount(count+1);
      break;
    case "decrement":
      setCount(count-1);
      break;
    case "multiply":
      setCount(count*4);
      break;
    case "divide":
      setCount(count/5);
      break;
    case "square":
      setCount(count*count);
      break;
    case "sqrt":
      setCount(Math.sqrt(count));
      break;
    case "reset":
      setCount(0);
      break;
    default :
      break;
  }
}
 return (
  <div className="app">

    <h1 className="title">COUNTER APP</h1>

    <div className="count-box">
      <h3>{count}</h3>
      <p>Current Count</p>
    </div>

    <div className="buttons">
      {buttons.map((button) => (
        <button
          key={button.name}
          onClick={() => handleClick(button.action)}
          className={`operation ${button.action}`}
        >
          <div className="symbol">{button.symbol}</div>
          <div>{button.name}</div>
        </button>
      ))}
    </div>

    <button
      className="reset"
      onClick={() => handleClick("reset")}
    >
      Reset
    </button>

  </div>
)
}

export default App