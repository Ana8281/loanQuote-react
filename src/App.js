import { Fragment } from 'react';
import React, {useState} from 'react'
import Header  from './components/Header';
import Form from "./components/Form";
import Total from "./components/Total";
import Message from "./components/Message";
import Spinner from './components/Spinner';

const App = () => {
  const [amount, setLoadAmount] = useState(0);

  const [term, setTermPay] = useState('');

  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false)

  //if Spinner and Total is too mch complicated to understand in the return please do (remeber add {component} variable in returm to show the component):
  // let component;
  // if (loading) {
  //   component = <Spinner />
  // } else if (total === 0) {
  //     component = <Message />
  // } else {
  //   component = <Total
  //                 total={total}
  //                 amount={amount}
  //                 term={term}
  //               />
  // }

  return (
    <Fragment>
        <Header title={"Loan Quote"} />
        <div className="container">
          <Form
            amount={amount}
            setLoadAmount={setLoadAmount}
            term={term}
            setTermPay={setTermPay}
            total={total}
            setTotal={setTotal}
            loading={loading}
            setLoading={setLoading}
          />
          { loading
            ? <Spinner />
            : total === 0
            ? <Message />
            : <Total
                total={total}
                amount={amount}
                term={term}
              />
          }
        </div>
    </Fragment>
  );
}

export default App;
