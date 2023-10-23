import { useState, useEffect } from "react";

function ActivityFinder() {
  // Fetches a random activity

  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");
  const [activityType, setActivityType] = useState("relaxation");

  useEffect(() => {
    console.log("running effect");
    let ignore = false; // flag to allow ignoring of the fetch result

    function fetchActivity(participants, activityType, setActivity) {
      fetch(
        `https://www.boredapi.com/api/activity?type=${activityType}&participants=${participants}`
      )
        .then((response) => response.json())
        .then((json) => {
          // only update state if the effect is still valid
          // ie. the dependency hasn't changed since the request
          if (!ignore) setActivity(json.activity);
        });
    }

    // Fetch activity only if there's a valid activity for the selected number of participants
    if (participants === "1" || participants === "2" || participants === "3") {
      fetchActivity(participants, activityType, setActivity);
    }

    // cleanup function - runs when unmounted or dependencies change
    return () => {
      ignore = true; // ignore now invalid fetch results
      console.log("cleanup effect");
    };
  }, [participants, activityType]); // effect dependencies

  // ++ Watch/edit the console log messages when using this component to
  // understand when the effect and its cleanup run

  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
  };

  const handleParticipantsChange = (e) => {
    const selectedParticipants = e.target.value;
    setParticipants(selectedParticipants);
  };

  return (
    <div className="ActivityFinder componentBox">
      {" "}
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select value={participants} onChange={handleParticipantsChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <label>
        Choose activity type:
        <select value={activityType} onChange={handleActivityTypeChange}>
          <option value="relaxation">Relaxation</option>
          <option value="education">Education</option>
          <option value="music">Music</option>
          <option value="recreational">Recreational</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity ||
          "No suitable activities found for the selected parameters."}
      </div>
    </div>
  );
}

export default ActivityFinder;

// ++ Reference https://www.boredapi.com/documentation and add a
// new dropdown to suggest an activity based on type
