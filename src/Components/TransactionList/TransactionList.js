import React from 'react';
import transactionListStyle from './TransactionList.module.css';


const TransactionList = () => {

    return (
        <div className={transactionListStyle.transactionListContainer}>
                <h1 className={transactionListStyle.title}>Previous History</h1>
                <hr/>
                <ul>
                    <li className={(transactionListStyle.list)}>
                        <h4>Test</h4>
                    </li>
                    <li className={transactionListStyle.list }>
                        <h4>Test</h4>
                    </li>
                    

                </ul>
        </div>
    )
}

export default TransactionList
