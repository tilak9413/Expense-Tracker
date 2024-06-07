import { useState } from "react";

const ListTransaction = () => {

 const [text, settext]=useState();
 const [ amount  , setamount] = useState();
  return (
    <>
      <div>
        <h3>Add new transaction</h3>
        <form id="form">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text"  onChange={(e)=> settext(e.target.value) }  placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input type="number"  onChange={(e)=> setamount(e.target.value) }  placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  );
};

export default ListTransaction;
