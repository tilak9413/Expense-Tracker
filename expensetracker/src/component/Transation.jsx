import { useContext } from "react";
import { GlobalContext } from "./context/Globle";

const Transaction = () => {
  const { transactions, dispatch } = useContext(GlobalContext);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((tran) => (
          <li key={tran.id} className={tran.amount < 0 ? "minus" : "plus"}>
            {tran.text}
            <span>
              {tran.amount < 0 ? "-" : "+"} ${Math.abs(tran.amount)}
            </span>
            <button className="delete-btn" onClick={() => deleteTransaction(tran.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Transaction;
