import { useState } from "react";

const Event = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <p>{event && event.summary}</p>
      <p>{event && event.created}</p>
      <p>{event && event.location}</p>
      {showDetails ?
        <p className ="details">{event && event.description}</p>
        : null
      }
      <button 
        className="details-button"
        onClick={() => { showDetails ? setShowDetails(false) : setShowDetails(true) }}
      >
        show details
      </button>
    </li>
  );
}

export default Event;
