// Exercise 4 & 5: 

import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useUserContext } from "../Store/Contexts/UserContext";
import ReducerCounter from "../components/Hooks/ReducerCounter";
import { useCounterContext } from "../Store/Contexts/CounterContext";
import Todo from "../components/Todo";
import ClockDisplay from "../components/Hooks/Clock";
import ActivityFinder1 from "../components/Hooks/ActivityFinder1";
import ActivityFinder2 from "../components/Hooks/ActivityFinder2";
import BitcoinRates from "../components/Hooks/BitcoinRates";
import RefCounter from "../components/Hooks/RefCounter";
import VideoPlayer from "../components/Hooks/VideoPlayer";
import PostListReducer from "../components/Hooks/PostListReducer";

export default function Homepage() {
  const { currentUser, handleUpdateUser } = useUserContext();
  const { counter } = useCounterContext();
  const [email, setEmail] = useState("");

  // let email = "";
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    // console.log('e.target.email', e.target.email);
    // const data = new FormData(e.target);
    // const formObject = Object.fromEntries(data.entries());
    handleUpdateUser({ email });
  };

  return (
    <>
      <div className="Homepage">
        <Typography variant="h1">Home</Typography>
        <Typography>{currentUser.email}</Typography>
        <div>Counter:{counter}</div>
        <div className="LoginForm componentBox">
          <form onSubmit={handleSubmit}>
            <div className="formRow">
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 16 }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export function NicolePage() {
  return (
    <div className="Nicole">
      <Typography variant="h1">Nicole's Page</Typography>
      <ClockDisplay />
      <ActivityFinder1 />
      <ActivityFinder2 />
      <BitcoinRates />
      <RefCounter />
      <VideoPlayer />
      <ReducerCounter />
      <PostListReducer />
      {/* <Todo /> */}
    </div>
  );
}
