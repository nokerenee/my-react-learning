// Exercise 3:

import React, { useContext, useState } from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState("😊");

  const changeMood = (newMood) => {
    setCurrentMood(newMood);
  };

  return (
    <EmojiContext.Provider value={{ currentMood, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};
