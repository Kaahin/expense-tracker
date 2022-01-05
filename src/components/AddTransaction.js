import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Lägg till ny utgift</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Skriv värde..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Belopp
            <br />
            (negativ - utgift, positiv - inkomst)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button className="btn">Lägg till utgift</button>
      </form>
    </>
  );
};

export default AddTransaction;
