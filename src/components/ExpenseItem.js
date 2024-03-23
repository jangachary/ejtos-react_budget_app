import React, { useContext } from "react";
import { TiDelete, TiPlus } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button className="btn btn-success btn-sm">
          <TiPlus onClick={(event) => increaseAllocation(props.name)}></TiPlus>
        </button>
      </td>
      <td>
        <button className="btn btn-danger btn-sm">
          <TiDelete height={"1rem"} onClick={handleDeleteExpense}></TiDelete>
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
