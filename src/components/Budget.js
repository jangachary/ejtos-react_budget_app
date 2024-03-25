import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, expenses, dispatch,currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, expense) => {
    return (total += expense.cost);
  }, 0);
  const updateBudget = (newBudget) => {
    if (newBudget < totalExpenses) {
      alert("Budget can't be lower than spendings !");
    } else {
      dispatch({ type: "SET_BUDGET", payload: newBudget });
    }
  };
  return (
    <div className="alert alert-secondary">
      <div style={{display:"flex"}}>
        <span style={{margin:"0 5px"}}>Budget</span>
        <span  style={{margin:"0 5px"}}>{currency} </span>
        <input
          type="number"
          max="20000"
          step="10"
          value={budget}
          onChange={(e) => {
            updateBudget(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Budget;
