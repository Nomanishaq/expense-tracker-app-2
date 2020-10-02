import React, { useContext } from 'react'
import transactionStyle from './Transaction.module.css';
import { GlobalContext } from '../../Context/GlobalContext';

const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const { DeleteTransaction } = useContext(GlobalContext);
    return (
        <li className={(transactionStyle.list)} key={transaction.id}>
            <h4>{transaction.text} <span className={transactionStyle.amount}>{sign}{Math.abs(transaction.amount)}</span><span className={transactionStyle.close} onClick={() => DeleteTransaction(transaction.id)}>X</span></h4>
        </li>
    )
}

export default Transaction
