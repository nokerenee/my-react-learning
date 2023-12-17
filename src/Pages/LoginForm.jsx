import { useState } from "react";
import { useUserContext } from "../Store/Contexts/UserContext";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  let email = "";
  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();
  // alternative using the useContext hook directly, either works
  //const {currentUser, handleUpdateUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (userPassword.length < 5) {
    //   setSubmitResult("Password must be at least 5 chars long");
    // } else if (userPassword === userEmail) {
    //   setSubmitResult("Password must not match email address");
    // } else {
      setSubmitResult("Successful login");
      handleUpdateUser({ email: "login@aa.com" }); // context function
    // }
  };
  {
    /* if the user is already logged in, show msg instead of form */
  }

  return (
    <>
      {currentUser.email ? (
        <>
          <p>Welcome {currentUser.email}!</p>{" "}
          <button onClick={() => handleUpdateUser({})}>Log Out</button>{" "}
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
// otherwise render same form as previously, no changes
export default LoginForm;
