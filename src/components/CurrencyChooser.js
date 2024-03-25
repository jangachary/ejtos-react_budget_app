import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const CurrencyChooser = () => {
  //   const { expenses } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);
  const setCurrency = (currency) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
  };
  const currencies = [
    {
      currency: "£",
      text: "£ Pound",
    },
    {
      currency: "$",
      text: "$ Dollar",
    },
    {
      currency: "€",
      text: "€ Euro",
    },
    {
      currency: "₹",
      text: "₹ Rupee",
    },
  ];

  let options = currencies.map((c, index) => (
    <option
      key={index}
      value={c.currency}
      style={{
        width: "100%",
        backgroundColor: "rgb(147, 228, 151)", // Background color for options
        ":hover": {
          backgroundColor: "#f0f0f0", // Background color for options on hover
        },
      }}
    >
      {c.text}
    </option>
  ));

  return (
    <>
      <div
        className="alert "
        style={{
          "backgroundColor": "rgb(147, 228, 151)",
          padding: "4px",
          border: "0px",
        }}
      >
        <select
          className="custom-select"
          id="inputGroupSelect01"
          style={{
            "backgroundColor": "rgb(147, 228, 151)",
            padding: "10px 80px",
          }}
          onChange={(event) => setCurrency(event.target.value)}
        >
          {options}
        </select>
      </div>
    </>
  );
};

export default CurrencyChooser;
