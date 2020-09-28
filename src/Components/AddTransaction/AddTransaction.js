import React from 'react';
import addTransactionStyle from './AddTransaction.module.css';

const AddTransaction = () => {
    return (
        <div className={addTransactionStyle.container}>
            <h1 className={addTransactionStyle.title}>Add AddTransaction</h1>
            
            <form>
                <div className={addTransactionStyle.formContainer}>
                <label>Transaction Name</label><br/><br/>
                <input type="text" className={addTransactionStyle.text} placeholder="Transaction Name"/>
                </div>

                <div className={addTransactionStyle.formContainer}>
                <label>Amount </label><br/><br/>
                <span>(negative - expense, positive - income)</span><br/><br/>
                <input type="number" className={addTransactionStyle.text} placeholder="Amount"/>
                </div>

                <div className={addTransactionStyle.formContainer}>
                <input type="submit" value="Add Transaction" className={addTransactionStyle.submit}/>
                </div>

            </form>
        </div>
    )
}

export default AddTransaction;