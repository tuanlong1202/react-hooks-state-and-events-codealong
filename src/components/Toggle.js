import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick(){
    setIsOn(!isOn);
  }
  const backgroundColor = isOn ? "red" : "white";
  return <button style={{background:backgroundColor}} onClick={handleClick}>{(isOn)? "ON" : "OFF"}</button>;
}

export default Toggle;
