import React, { useContext } from "react";
import { TiDelete, TiMinus, TiPlus } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

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
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency} {props.cost}
      </td>
      <td>
        <button className="btn btn-success btn-sm">
          <TiPlus onClick={(event) => increaseAllocation(props.name)}></TiPlus>
        </button>
      </td>
      <td>
        <button className="btn btn-danger
         btn-sm">
          <TiMinus onClick={(event) => decreaseAllocation(props.name)}></TiMinus>
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
