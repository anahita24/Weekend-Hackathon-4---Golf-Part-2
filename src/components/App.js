import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {};
  const removebutton=()=>{
    setRenderBall(true);
    renderChoice();
  };
  const renderChoice = () => {
  if(renderBall)
  return (<div className="ball"></div>);
  else
  return (<button className="start" onClick={removebutton}>Start</button>)
 };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
 12 
