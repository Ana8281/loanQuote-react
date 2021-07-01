import React from 'react'

const Total = ({total, amount, term}) => (
    <div className="u-full-width resultado">
        <h2>Summary</h2>
        <p>The amount requested is: ${amount}</p>
        <p>For paying in: {term} Months</p>
        <p>Your Monthly payment is: ${(total / term).toFixed(2 )}</p>
        <p>Total to pay: ${total}</p>

    </div>
);

export default Total;