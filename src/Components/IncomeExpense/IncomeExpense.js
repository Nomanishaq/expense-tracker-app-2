import React from 'react'
import incomeExpenseStyle from './IncomeExpense.module.css';

const IncomeExpense = () => {
    return (
        <>
        <div className={incomeExpenseStyle.incomeExpenseContainer}>
                <div className={incomeExpenseStyle.income}>
                    <h1>Income</h1>
                    <h2>$0.00</h2>

                </div>
            <hr />

                <div className={incomeExpenseStyle.expense}>
                    <h1>Expense</h1>
                    <h2>$0.00</h2>
                </div>
        </div>

<br/>        <hr />

</>
    )
}

export default IncomeExpense
