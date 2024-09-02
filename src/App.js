import { useState } from "react";
import "./App.css";

function App() {
  const [minute, setMinute] = useState(); 
  const [hour, setHour] = useState(); 
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMinuteChange = (event) => {
    setMinute(Number(event.target.value));
  };

  const handleHourChange = (event) => {
    setHour(Number(event.target.value));
  };

  const convertTime = () => {
    if (isFlipped) {
      setMinute(hour * 60); 
    } else {
      setHour(minute / 60); 
    }
  };

  const flipConversion = () => {
    setIsFlipped(!isFlipped);
    if (isFlipped) {
      setHour(minute / 60);
    } else {
      setMinute(hour * 60);
    }
  };

  return (
    <div className="App">
      <input type="number" value={minute} onChange={handleMinuteChange} disabled={isFlipped} />
      minutes
      <br />
      <input type="number" value={hour} onChange={handleHourChange} disabled={!isFlipped} />
      hours
      <p />
      <button onClick={convertTime} style={{marginRight : "10px"}}>변환</button>
      <button onClick={flipConversion}>방향 전환</button>
      <div>Direction: {isFlipped ? "Hours to Minutes" : "Minutes to Hours"}</div>
    </div>
  );
}

export default App;
