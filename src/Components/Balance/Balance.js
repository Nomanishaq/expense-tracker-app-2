import React, { Fragment, useContext } from 'react';
import balanceStyle from './Balance.module.css';
import {GlobalContext} from '../../Context/GlobalContext';

const Balance = () => {
    const {transactions}  = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item),0).toFixed();

    return (
        <Fragment>
            <div className={balanceStyle.balanceContainer}>
                <br />
                <br />
                <h1 className={balanceStyle.title}>Your Total Balance is:</h1>
    <h1 className={balanceStyle.balance}>$ {total}</h1>
            </div>
            <hr />
        </Fragment>
    )
}

export default Balance
