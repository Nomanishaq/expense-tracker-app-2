import React, { useContext } from 'react';
import transactionListStyle from './TransactionList.module.css';
import { GlobalContext } from '../../Context/GlobalContext';
import Transaction from '../Transaction/Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className={transactionListStyle.transactionListContainer}>
            <h1 className={transactionListStyle.title}>Previous History</h1>
            <hr />
            <ul>
                {transactions.map(transaction => (<Transaction transaction={transaction} key={transaction.id} />))}
            </ul>
        </div>
    )
}

export default TransactionList
