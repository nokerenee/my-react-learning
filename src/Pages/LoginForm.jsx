import { useState } from "react";
import { useUserContext } from "../Store/Contexts/UserContext";
import { Button, TextField, Typography } from "@mui/material";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const { currentUser, handleUpdateUser } = useUserContext();

  // let email = "";
  // destructure the context values passed via UserProvider
  // const { currentUser, handleUpdateUser } = useUserContext();
  // alternative using the useContext hook directly, either works
  //const {currentUser, handleUpdateUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (userPassword.length < 5) {
    //   setSubmitResult("Password must be at least 5 chars long");
    // } else if (userPassword === userEmail) {
    //   setSubmitResult("Password must not match email address");
    // } else {
    if (userEmail === "nrkelly57@gmail.com") {
      setSubmitResult("Successful login");
      handleUpdateUser({ email: "nrkelly57@gmail.com" });
    } else {
      setSubmitResult("Invalid email");
    }
    // }
  };
  {
    /* if the user is already logged in, show msg instead of form */
  }

  return (
    <>
      {currentUser.email ? (
        <>
          <Typography variant="h5">Welcome {currentUser.email}!</Typography>
          <Button variant="outlined" onClick={() => handleUpdateUser({})}>
            Log Out
          </Button>{" "}
        </>
      ) : (
        <>
          <div className="LoginForm componentBox">
            <form onSubmit={handleSubmit}>
              <div className="formRow">
                <TextField
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
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
            {submitResult && <Typography>{submitResult}</Typography>}
          </div>
        </>
      )}
    </>
  );
}
// otherwise render same form as previously, no changes
export default LoginForm;
