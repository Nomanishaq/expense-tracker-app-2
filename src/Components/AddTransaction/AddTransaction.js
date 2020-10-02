import React, { useState, useContext } from 'react';
import addTransactionStyle from './AddTransaction.module.css';
import { GlobalContext } from '../../Context/GlobalContext';

const AddTransaction = () => {
    const { AddTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        AddTransaction(newTransaction);
        setText("");
        setAmount('');
    }

    return (
        <div className={addTransactionStyle.container}>
            <h1 className={addTransactionStyle.title}>Add AddTransaction</h1>

            <form onSubmit={onSubmit}>
                <div className={addTransactionStyle.formContainer}>
                    <label>Transaction Name</label><br /><br />
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={addTransactionStyle.text} placeholder="Transaction Name" required />
                </div>

                <div className={addTransactionStyle.formContainer}>
                    <label>Amount </label><br /><br />
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className={addTransactionStyle.text} placeholder="Amount (negative - expense, positive - income)" required />
                </div>

                <div className={addTransactionStyle.formContainer}>
                    <input type="submit" value="Add Transaction" className={addTransactionStyle.submit} />
                </div>

            </form>
        </div>
    )
}

export default AddTransaction;