import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { billsContext } from "../context/billsContext";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#124c62",
    minHeight: "90vh",
    paddingTop: "50px",
  },
  container: {
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px",
    border: "1px solid #269dbf",
    borderRadius: "16px",
    boxShadow: "0px 16px 40px rgb(3 23 111 / 10%)",
  },
  button: {
    background: "#176b7e",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "500",
    padding: "12px 24px",
    borderRadius: "12px",
    "&:hover": {
      background: "#124c62",
    },
    textTransform: "none",
  },
  content: {
    marginTop: "30px",
    padding: "30px",
    border: "1px solid #269dbf",
    borderRadius: "16px",
    boxShadow: "0px 16px 40px rgb(3 23 111 / 10%)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "24px",
  },
}));

const Bills = () => {
  const classes = useStyles();
  const params = useParams();
  const { bills, setBills } = useContext(billsContext);
  const data = bills.filter((item) => item.id === params.id);

  const handleClick = () => {
    const handleBills = (data) => {
      data.map((item) => {
        if (item.id === params.id) {
          item.status = "paid";
        }
        return 0;
      });
      return [...data];
    };

    setBills((prev) => handleBills(prev));
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="body1">{data?.[0]?.id ?? ""}</Typography>
          <Typography variant="body1">{data?.[0]?.status ?? ""}</Typography>
          {data?.[0]?.status === "pending" && (
            <Button
              className={classes.button}
              variant="outlined"
              disableElevation
              disableRipple
              onClick={handleClick}
            >
              Mark Paid
            </Button>
          )}
        </div>
        <div className={classes.content}>
          <Typography variant="body1">
            Customer Name : {data?.[0]?.customer_name ?? ""}
          </Typography>
          <Typography variant="body1">
            Customer Email : {data?.[0]?.customer_email ?? ""}
          </Typography>
          <Typography variant="body1">
            Product Description: {data?.[0]?.product_description ?? ""}
          </Typography>
          <Typography variant="body1">
            Customer Address: {data?.[0]?.customer_address ?? ""}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Bills;
