import React, {Fragment, useState} from 'react';
import { CalculateTotal} from '../helpers';

const Form = (props) => {
    const {
        amount,
        setLoadAmount,
        term,
        setTermPay,
        setTotal,
        setLoading
    } = props;

    const [msg, setmsg] = useState(false)

    const calculateLoan = e => {
        e.preventDefault();

        if (amount === 0 || term === '') {
            setmsg(true)

            return;

        } else {
            setmsg(false);

            //Enable spinner
            setLoading(true);

            setTimeout(() => {
                const totalToPay = CalculateTotal(amount, term);

                setTotal(totalToPay);

                //disable spinner
                setLoading(false);
            }, 3000)


            
        }
    }

    return (
        <Fragment>
            <form onSubmit={calculateLoan}>
            <div className="row">
                <div>
                    <label>Loan amount</label>
                    <input
                            onChange={e => setLoadAmount(parseInt(e.target.value)) }
                            className="u-full-width" 
                            type="number" 
                            placeholder="Example: 3000" 
                    />
                </div>
                <div>
                    <label>Term to pay</label>
                    <select
                            onChange={e => setTermPay(parseInt(e.target.value))}
                            className="u-full-width"
                    >
                        <option value="">Select</option>
                        <option value="3">3 months</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calculate" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
            </form>

        { msg ?
            <p className="error">All Fields are mandatory</p>
            :
            null
        }
        
        </Fragment>
    );
}

export default Form;