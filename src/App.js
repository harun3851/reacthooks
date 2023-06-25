import "./App.css";
import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";

function App() {
  const [counter, setCounter] = useState(1);
  const [inputValue, setInputValue] = useState("harun");

  const reducer = (state, action) => {
    switch(action.type) {
      case "INCREASE":
          return {count: state.count+1, showText: state.showText};
          case "toggleShowText":
            return {count:state.count, showText: !state.showText};
            default:
              return state;
    }
  };

 
    const[state, dispatch] = useReducer(reducer,{count:0,showText:true}); 

 
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
 const onChange = (event) => {
  const newValue = event.target.value;
  setInputValue(newValue);

 };

 const [data, setData] = useState("");
 const [count, setCount] = useState(0);
 useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data[0].email);
      console.log("API WAS CALLED");
    });
}, []);
 
  return (
    <div className="App">
      <div>
        <p>example 1:statehooks increment</p>
        <p>{counter}</p>
        <button onClick={increment}> increment </button>
        <p>_____________________</p>
      </div>

      <p>example 2:statehooks onchange</p>

      <div style={{ marginTop: "40px" }}>
        <input placeholder="write your name..." onChange={onChange}></input>
        <p>{inputValue}</p>
        <p>_____________________</p>
      </div>

      <p>example 3:useReducer</p>

<div style={{ marginTop: "40px" }}>
<button onClick={()=>{
  dispatch({type:"INCREASE"});
  dispatch({type:"toggleShowText"});
}}>
click here
</button>
{state.showText&&<p>This is a text</p>}
<h1>{state.count}</h1>
  <p>_____________________</p>
</div>

<p>example 4:useEffect</p>
<div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>


    </div>
  );
};
export default App;
