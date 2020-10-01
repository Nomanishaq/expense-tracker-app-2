import React, { Fragment }  from 'react';
import './App.css';
import {
  Header,
  Balnace,
  IncomeExpense,
  TransactionList,
  AddTransaction,
  Footer
} from './Components/initializeComponent';
import { GlobalProvider } from './Context/GlobalContext';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
    <GlobalProvider>
        <Balnace />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
    </GlobalProvider>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
