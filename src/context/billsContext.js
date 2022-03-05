import React, { createContext, useState } from "react";

export const billsContext = createContext();

const BillsContextProvider = (props) => {
  const [bills, setBills] = useState([
    {
      id: "abc",
      status: "paid",
      customer_name: "jhon",
      customer_email: "jhon@gmail.com",
      product_description: "Books",
      customer_address: "Mars",
      itemList: [
        {
          item_name: "novels",
          item_price: "100",
        },
      ],
    },
  ]);

  const [filter, setFilter] = useState("");
  return (
    <billsContext.Provider value={{ bills, setBills, filter, setFilter }}>
      {props.children}
    </billsContext.Provider>
  );
};

export default BillsContextProvider;
