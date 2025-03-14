import { useContext } from "react";
import { GlobalContext } from "./context/Globle";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((tran)=> ( tran.amount ))
  const total = amount.reduce((acc , item)=> ( acc+=item),0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{total}</h1>
    </>
  );
};

export default Balance;
