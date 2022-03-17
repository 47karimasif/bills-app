import React, { useContext } from "react";
import Header from "../components/header";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { billsContext } from "../context/billsContext";
import { useNavigate } from "react-router-dom";

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
    marginBottom: "20px",
  },
  icon: {
    color: "#FFF",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { bills, filter } = useContext(billsContext);
  console.log(bills);
  console.log(filter);
  const navigate = useNavigate();

  const filteredData =
    filter !== "" ? bills.filter((item) => item.status === filter) : bills;

  const priceAccumulator = (itemList) => {
    let price = 0;
    itemList.map((item) => (price += parseInt(item.item_price)));
    return price;
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Header />
      </div>
      <div className={classes.billsWrapper}>
        {filteredData.map((item, i) => (
          <div
            className={classes.billsCard}
            key={i}
            onClick={() => navigate(`/${item.id}`)}
          >
            <Typography>{item.id}</Typography>
            <Typography>{item.customer_name}</Typography>
            <Typography>{priceAccumulator(item.itemList)}</Typography>
            <Typography>{item.status}</Typography>
            <ArrowForwardIosIcon className={classes.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
