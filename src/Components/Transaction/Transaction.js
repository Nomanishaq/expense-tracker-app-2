import React from 'react'
import transactionStyle from './Transaction.module.css';

const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-': '+';
    return (
        <li className={(transactionStyle.list)} key={transaction.id}>
            <h4>{transaction.text} <span className={transactionStyle.amount}>{sign}{Math.abs(transaction.amount)}</span></h4>
    <span></span>
        </li>
    )
}

export default Transaction
