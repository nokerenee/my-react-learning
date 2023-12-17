import { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { useFormInput } from "../Hooks/UseFormInput";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");

  // use our custom hook instead of useState directly
  const [nameInputProps, resetName] = useFormInput("Mary");
  const [emailInputProps, resetEmail] = useFormInput("mary@pop.com");

  function handleSubscribe() {
    resetName();
    resetEmail();
    setStatus("Thanks for subscribing!");
  }

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, textAlign: "center", maxWidth: 400, margin: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Subscribe
      </Typography>
      <form>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          {...nameInputProps}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...emailInputProps}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubscribe}
          fullWidth
          mt={2}
        >
          Subscribe
        </Button>
      </form>
      <Typography variant="body1" mt={2}>
        {status}
      </Typography>
    </Paper>
  );
}

// ++ Try adding another form input using the custom hook
// ++ Try creating another form component using the custom hook
