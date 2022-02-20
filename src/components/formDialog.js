import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Form from "./form";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiDialog-paper": {
      padding: "30px",
      minWidth: "600px",
      borderRadius: "16px",
    },
  },
  icon: {
    position: "absolute",
    top: "8px",
    right: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  dialogTitle: {
    padding: "0px ",
    "& h2": {
      textAlign: "center",
      fontSize: "20px",
      color: "#3e3e3e",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  dialogContent: {
    overflowY: "hidden",
    color: "#676767 !important",
  },
}));

const FormDialog = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => setOpen(false);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="body"
      classes={{ root: classes.root }}
      sm
    >
      <DialogTitle classes={{ root: classes.dialogTitle }}>
        Customer Bills Details
        <CloseIcon onClick={handleClose} className={classes.icon} />
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        <Form setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
