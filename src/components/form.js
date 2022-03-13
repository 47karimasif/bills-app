import React, { useState, useEffect, useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { billsContext } from "../context/billsContext";
import { uid } from "uid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formWrapper: {
    "& .MuiInputLabel-formControl": {
      color: theme.palette.primary.main,
    },
  },
  container: {
    marginTop: "20px",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "24px",
  },
  textField: {
    borderRadius: "6px",
  },
  btn: {
    marginTop: "30px",
    width: "40%",
    marginLeft: "60%",
    background: "#124c62",
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "600",
    padding: "12px 24px",
    borderRadius: "12px",
    "&:hover": {
      background: "#124c62",
    },
    textTransform: "none",
  },
  itemList: {
    marginTop: "20px",
  },
  itemTitle: {
    color: theme.palette.primary.main,
    marginBottom: "10px",
  },
  DeleteIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  itemWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  inputList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "24px",
  },
  newbtn: {
    marginTop: "30px",
    width: "100%",
    background: theme.palette.primary.light,
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "600",
    padding: "12px 24px",
    borderRadius: "12px",
    "&:hover": {
      background: "#124c62",
    },
    textTransform: "none",
  },
}));

const Form = ({ setOpen }) => {
  const classes = useStyles();
  const { setBills } = useContext(billsContext);
  const [values, setValues] = useState({
    id: uid(),
    customer_name: "",
    customer_email: "",
    product_description: "",
    customer_address: "",
    itemList: [
      {
        item_name: "",
        item_price: "",
      },
    ],
    status: "pending",
  });
  const [counter, setCounter] = useState(0);

  useEffect(() => {}, [counter]);

  const handleNewItems = () => {
    const newItemList = {
      item_name: "",
      item_price: "",
    };
    // component will re render if we change state using its associated fnctn
    setValues((oldValue) => ({
      ...oldValue,
      itemList: [...oldValue.itemList, newItemList],
    }));
    // setCounter((oldvalue) => oldvalue + 1);
  };

  const handleDeleteItems = (id) => {
    const updatedItemLists = values.itemList.filter((item, i) => i !== id);
    setValues({
      ...values,
      itemList: updatedItemLists,
    });
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleItemValues = (e, i) => {
    const valuesCopy = values;
    valuesCopy.itemList[i][e.target.name] = e.target.value;
    setValues(valuesCopy);
    setCounter((old) => old + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBills((oldVlaues) => [...oldVlaues, values]);
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <form className={classes.formWrapper} onSubmit={handleSubmit}>
        <div className={classes.wrapper}>
          <TextField
            id="outlined-basic"
            label="customer name"
            variant="outlined"
            className={classes.TextField}
            value={values.customer_name}
            onChange={handleChange}
            name="customer_name"
          />
          <TextField
            id="outlined-basic"
            label="customer email"
            variant="outlined"
            value={values.customer_email}
            onChange={handleChange}
            name="customer_email"
          />
          <TextField
            id="outlined-basic"
            label="Product Description"
            variant="outlined"
            value={values.product_description}
            onChange={handleChange}
            name="product_description"
          />
          <TextField
            id="outlined-basic"
            label="customer Address"
            variant="outlined"
            value={values.customer_address}
            onChange={handleChange}
            name="customer_address"
          />
        </div>
        <div className={classes.itemList}>
          <Typography variant="h4" className={classes.itemTitle}>
            Item Lists
          </Typography>
          {values.itemList.map((item, i) => {
            return (
              <div className={classes.itemWrapper} key={i}>
                <div className={classes.inputList}>
                  <TextField
                    id="outlined-basic"
                    label="Item Name"
                    variant="outlined"
                    value={item.item_name}
                    onChange={(e) => handleItemValues(e, i)}
                    name="item_name"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Item Price"
                    variant="outlined"
                    value={item.item_price}
                    onChange={(e) => handleItemValues(e, i)}
                    name="item_price"
                  />
                </div>
                <DeleteIcon
                  className={classes.DeleteIcon}
                  onClick={() => handleDeleteItems(i)}
                />
              </div>
            );
          })}
          <Button
            variant="contained"
            disableElevation
            disableRipple
            className={classes.newbtn}
            onClick={handleNewItems}
          >
            Add new Items
          </Button>
        </div>
        <Button
          variant="contained"
          disableElevation
          disableRipple
          className={classes.btn}
          type="submit"
        >
          Generate Bills
        </Button>
      </form>
    </div>
  );
};

export default Form;
