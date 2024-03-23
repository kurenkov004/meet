import { useState} from "react";


const NumberOfEvents = ({ setCurrentNOE }) => {

  const [numOfDispEvents, setNumOfDispEvents] = useState("32");

  const handleInputChange = (event) => {
    const value = event.target.value;
    // setNumOfDispEvents(value);
    setCurrentNOE(value);

  }

  return (
    <div id="number-of-events">
      <input
        type="text"
        defaultValue="32"
        // value={numOfDispEvents}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default NumberOfEvents;