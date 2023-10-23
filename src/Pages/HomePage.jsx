import { useUserContext } from "../Store/UserContext";
import ReducerCounter from "../components/Counter";
import { useCounterContext } from "../Store/CounterContext";
import Todo from "../components/Todo";

export default function Homepage() {
  const { currentUser, handleUpdateUser } = useUserContext();
  const {counter} = useCounterContext();
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
      <ReducerCounter></ReducerCounter>
      <Todo></Todo>
    </div>
  );
}
