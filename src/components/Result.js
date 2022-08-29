import React from 'react'


const Result = ({ total, months, quantity }) => (
    <div className="u-full-width result">
        <h2>SUMMARY</h2>
        <p>Quantity: {quantity} €</p>
        <p>Months: {months} months</p>
        <p>Quote: { (quantity/months).toFixed(2) } € per month</p>
        <p>Total amount: {total} €</p>
    </div>
);
 
export default Result;