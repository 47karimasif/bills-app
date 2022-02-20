import React from "react";
import Header from "../components/header";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    minHeight: "90vh",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto ",
    padding: "50px 0",
  },
  billsWrapper: {
    marginTop: "50px",
    maxWidth: "800px",
    margin: "0 auto ",
  },
  billsCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    border: "1px solid #269dbf",
    borderRadius: "16px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon: {
    color: "#FFF",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Header />
      </div>
      <div className={classes.billsWrapper}>
        <div className={classes.billsCard}>
          <Typography>id</Typography>
          <Typography>name</Typography>
          <Typography>price</Typography>
          <Typography>status</Typography>
          <ArrowForwardIosIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default Home;
