// src/components/NumberOfEvents.js

import { useState} from "react";


const NumberOfEvents = () => {

  const [numOfDispEvents, setNumOfDispEvents] = useState("32");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumOfDispEvents(value);


  }

  return (
    <div id="number-of-events">
      <input
        type="text"
        value={numOfDispEvents}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default NumberOfEvents;