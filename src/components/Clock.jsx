import { useState, useEffect } from "react";

// Renders a digital time that updates every second
function Clock() {

  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    // first arg is usually an arrow function
    let clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    // function returned from useEffect is run on unmount
    // and used to cleanup any side effects
    return () => {
      console.log("Clock component unmounted");
      clearInterval(clockInterval);
    };
  }, []); // second arg is an array of dependencies

  // ++ Watch the console when the Clock is removed -
  // does the ticking still continue now? 

  // ++ Try to add another state variable tickCount, to keep 
  // track of (and display) the number of seconds the clock
  // has ticked since mounting. Reset it to 0 on unmount.

  const tick = () => {
    setDate(new Date());
    setTickCount((prevTickCount) => prevTickCount + 1);
    console.log("tick"); // track the effect frequency
  };
  
  return (
    <div className="Clock">
      {" "}
      <h3>Digital Clock</h3> {date.toLocaleTimeString()}{" "}
    </div>
  );
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?

function ClockDisplay() {
  const [showClock, setShowClock] = useState(false);
  const toggleClock = () => {
    setShowClock(!showClock);
  };

  return (
    <div className="ClockDisplay componentBox">
      {" "}
      {showClock && <Clock />}{" "}
      <button onClick={toggleClock}>Toggle Clock</button>{" "}
    </div>
  );
}

export default ClockDisplay;

// ++ Add both components into Clock.jsx and render
// <ClockDisplay /> from App.jsx

// ++ Watch the console when the Clock is removed -
// does the ticking still continue?
