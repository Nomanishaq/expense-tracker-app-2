import React, { Fragment } from 'react';
import './App.css';
import {
  Header,
  Balnace,
  IncomeExpense,
  TransactionList,
  AddTransaction,
  Footer

} from './Components/initializeComponent';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Balnace />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
      <Footer/>
    </Fragment>
  );
}

export default App;
