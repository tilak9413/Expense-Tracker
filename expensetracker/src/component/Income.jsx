import { useContext } from "react";
import { GlobalContext } from "./context/Globle";
const Income = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((tran)=> ( tran.amount ))

  const Income  = (amount.filter(item=> item >0 ).reduce((acc, items)=> ( acc+=items),0)).toFixed(2);
  const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
  return (
    <>
      <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            {Income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {expense}
          </p>
        </div>
      </div>
    </>
  );
};
export default Income;
