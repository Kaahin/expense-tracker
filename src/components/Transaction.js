import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={transaction.amount < 0 ? "minus" : "plus"}
      // if (transaction.amount < 0) {
      //   return "minus";
      // } else if (transaction.amount > 0) {
      //   return "plus";
      // } else {
      //   return "plus";
      // }
    >
      {transaction.text}{" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)}SEK{" "}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
