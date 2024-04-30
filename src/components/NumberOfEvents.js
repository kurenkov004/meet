import { useState} from "react";


const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const [numOfDispEvents, setNumOfDispEvents] = useState("32");

  const handleInputChange = (event) => {
    const value = event.target.value;
    // setNumOfDispEvents(value);
    // setCurrentNOE(value);

    let errorText;
    if (value.length <= 0 || isNaN(value)) {
      errorText = "Input must be a positive number"
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
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