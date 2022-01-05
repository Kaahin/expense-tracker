import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  // Plocka ut transactions
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  // Visa transactions
  const amounts = transactions.map((transaction) => transaction.amount);
  // Total summan
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Ditt Saldo</h4>
      <h1>{total}</h1>
    </>
  );
};

export default Balance;
