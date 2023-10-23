import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function MUIDialog({ text }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnSubmit = () => {
    console.log('this is handleOnSubmit');
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog{" "}
      </Button>{" "}
      <Dialog open={open} onClose={handleClose}>
        {" "}
        <DialogContent>
          {" "}
          <DialogContentText id="alert-dialog-description">
            {" "}
            {text}{" "}
          </DialogContentText>{" "}
        </DialogContent>{" "}
        <DialogActions>
          {" "}
          <Button onClick={handleOnSubmit} autoFocus>
            OK
          </Button>{" "}
        </DialogActions>{" "}
      </Dialog>{" "}
    </div>
  );
} // Render as <MUIDialog text="My first MUI Dialog" />
