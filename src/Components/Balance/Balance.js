import React, { Fragment } from 'react';
import balanceStyle from './Balance.module.css';

const Balance = () => {
    return (
        <Fragment>
            <div className={balanceStyle.balanceContainer}>
                <br />
                <br />
                <h1 className={balanceStyle.title}>Your Total Balance is:</h1>
                <h1 className={balanceStyle.balance}>$260.00</h1>
            </div>
            <hr />
        </Fragment>
    )
}

export default Balance
