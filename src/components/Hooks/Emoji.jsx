// Exercise 3: 

import { useEmojiContext } from "../../Store/Contexts/EmojiContext";

function Emoji() {
  const { currentMood, changeMood } = useEmojiContext();

  return (
    <div className="Emoji componentBox">
      Current Mood: {currentMood}
      {/* Change the mood state by calling changeMood when a button is clicked */}
      <button onClick={() => changeMood("🥱")}> Tired </button>
      <button onClick={() => changeMood("😠")}> Angry </button>
      <button onClick={() => changeMood("😢")}> Sad </button>
    </div>
  );
}

export default Emoji;
