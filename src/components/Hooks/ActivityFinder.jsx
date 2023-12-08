import { useState } from "react";
import { useData } from "../Hooks/UseData";

function ActivityFinder() {
  // Fetches a random activity

  const [participants, setParticipants] = useState(1);
  const [activityType, setActivityType] = useState("relaxation");

  // uses custom hook to handle the effect for loading external data 
  const data = useData(`https://www.boredapi.com/api/activity?type=${activityType}&participants=${participants}`);
  // get the activity from the json or show error message if failed 
  const activity = data ? data.activity : 'not found';

  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
  };

  const handleParticipantsChange = (e) => {
    const selectedParticipants = e.target.value;
    setParticipants(selectedParticipants);
  };

  return (
    <div className="ActivityFinder componentBox">
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
        {activity}
      </div>
    </div>
  );
}

export default ActivityFinder;

// ++ Reference https://www.boredapi.com/documentation and add a
// new dropdown to suggest an activity based on type
