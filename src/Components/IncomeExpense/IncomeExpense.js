import React, { useContext } from 'react'
import incomeExpenseStyle from './IncomeExpense.module.css';
import { GlobalContext } from '../../Context/GlobalContext';

const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transaction => transaction.amount);

    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);


    return (
        <>
            <div className={incomeExpenseStyle.incomeExpenseContainer}>
                <div className={incomeExpenseStyle.income}>
                    <h1>Income</h1>
                    <h2>$ {income}</h2>

                </div>
                <hr />

                <div className={incomeExpenseStyle.expense}>
                    <h1>Expense</h1>
                    <h2>$ {expense}</h2>
                </div>
            </div>

            <br />        <hr />

        </>
    )
}

export default IncomeExpense
