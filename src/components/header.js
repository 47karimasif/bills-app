import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  formControl: {
    minWidth: 160,
    "& .MuiInput-underline:before": {
      borderBottom: "none !important",
    },
    "& .MuiSelect-icon": {
      color: "#FFF",
    },
    "& .MuiInput-underline:after": {
      transform: "scaleX(0)",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#FFF",
    },
  },
  paper: {
    background: "#32626c",
  },
  input: {
    color: "#FFF",
  },
  selectRoot: {
    "&:focus": {
      background: "transparent",
    },
  },
  newButton: {
    display: "flex",
    marginLeft: "20px",
    padding: "15px",
    background: theme.palette.primary.dark,
    borderRadius: "40px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon: {
    color: "white",
    marginLeft: "10px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [filterType, setFilterType] = useState("");
  const menuProps = {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    classes: { paper: classes.paper },
  };
  const inputProps = {
    classes: { root: classes.input },
  };

  const handleChange = (event) => {
    setFilterType(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Typography variant="h5">Bills</Typography>
        <Typography>Total 2 Bills</Typography>
      </div>
      <div className={classes.right}>
        <div className={classes.filterWrapper}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Filter By Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterType}
              onChange={handleChange}
              MenuProps={menuProps}
              inputProps={inputProps}
              classes={{
                root: classes.selectRoot,
              }}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="paid">Paid</MenuItem>
              <MenuItem value="">None</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.newButton}>
          <Typography>New Bills</Typography>
          <AddIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default Header;