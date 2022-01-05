import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((trans) => trans.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *-1

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Inkomst</h4>
        {income == 0 ? (
          <p className="money neutral">{income}SEK</p>
        ) : (
          <p className="money plus">+{income}SEK</p>
        )}
      </div>
      <div>
        <h4>Utgifter</h4>
        {expense == 0 ? (
          <p className="money neutral">{expense}SEK</p>
        ) : (
          <p className="money minus">-{expense}SEK</p>
        )}
      </div>
    </div>
  );
};

export default IncomeExpenses;
