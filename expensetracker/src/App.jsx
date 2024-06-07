import React from "react";
import Header from "./component/Header";
import "./App.css";
import Balance from "./component/Balance";
import Income from "./component/Income";
import Transaction from './component/Transation'
import ListTransaction from "./component/ListTransaction";
import { GlobalProvider } from "./component/context/Globle";

function App() {
  return (
    <GlobalProvider>
      <div>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <Transaction />
        <ListTransaction />
      </div>
      </div>
     
    </GlobalProvider>
  );
}

export default App;
