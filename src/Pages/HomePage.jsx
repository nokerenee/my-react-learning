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
  let email = "";
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    // console.log('e.target.email', e.target.email);
    const data = new FormData(e.target);
    const formObject = Object.fromEntries(data.entries());
    handleUpdateUser({ email: formObject.email });
  };
  return (
    <>
      <div className="Homepage">
        <h1>Home</h1>
        {currentUser.email}
        <div>Counter:{counter}</div>
        <div className="LoginForm componentBox">
          <form onSubmit={handleSubmit}>
            <div className="formRow">
              <label>
                Email Address:
                <input type="email" defaultValue={email} name="email" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export function NicolePage() {
  return (
    <div className="Nicole">
      <h1>Nicole's Page</h1>
      <ClockDisplay />
      <ActivityFinder1 />
      <ActivityFinder2/>
      <BitcoinRates />
      <RefCounter />
      <VideoPlayer />
      <ReducerCounter/>
      <PostListReducer/>
      {/* <Todo /> */}
    </div>
  );
}
