import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [note, setNote] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            note,
            category,
            amount: +amount,
        }

        addTransaction(newTransaction)

        setNote("")
        setAmount("")
        setCategory("")
    }

  return (
    <div>
        <h3>Add Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="note">Note</label>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='Enter Note...'></input>
            </div>
            <div className='form-control'>
                <label htmlFor="category">Category</label><br></br>
                <select value={category} onChange={(e) => setCategory(e.target.value)} name="category">
                    <option value="">Choose Category</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Family">Family</option>
                    <option value="Gas">Gas</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Household">Household</option>
                    <option value="Personal">Personal</option>
                    <option value="Pets">Pets</option>
                    <option value="Savings">Savings</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Vacation">Vacation</option>
                </select>
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount</label>
                <p>Type "-" before the number for negative values.</p>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...'></input>
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </div>
  )
}
