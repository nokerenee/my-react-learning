import { Button, TextField, Typography, Grid, Paper } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";

export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          Dashboard
        </Typography>

        <Outlet />

        <Grid container spacing={2} justifyContent="center" mt={3}>
          <Grid item>
            <Button variant="contained" onClick={() => navigate("/dash/tasks")}>
              Show Tasks
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => navigate("/dash/messages")}
            >
              Show Messages
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
// ++ Move the <Outlet/> below the buttons and observe the change
// Save as DashboardPage.jsx in a new folder called 'pages'
// See next slide for additional content for this file
