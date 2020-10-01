import React, { useState } from 'react';
import addTransactionStyle from './AddTransaction.module.css';

const AddTransaction = () => {
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div className={addTransactionStyle.container}>
            <h1 className={addTransactionStyle.title}>Add AddTransaction</h1>

            <form>
                <div className={addTransactionStyle.formContainer}>
                    <label>Transaction Name</label><br /><br />
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} className={addTransactionStyle.text} placeholder="Transaction Name" />
                </div>

                <div className={addTransactionStyle.formContainer}>
                    <label>Amount </label><br /><br />
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} className={addTransactionStyle.text} placeholder="Amount (negative - expense, positive - income)" />
                </div>

                <div className={addTransactionStyle.formContainer}>
                    <input type="submit" value="Add Transaction" className={addTransactionStyle.submit} />
                </div>

            </form>
        </div>
    )
}

export default AddTransaction;