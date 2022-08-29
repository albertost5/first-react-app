import React, { Fragment, useState } from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Message from './components/Message.js';
import Result from './components/Result.js';
import Spinner from './components/Spinner.js';


function App() {

  // Define state
  const [quantity, setQuantity] = useState(0);
  const [months, setMonths] = useState(0);
  const [total, setTotal] = useState(0);
  const [spinner, setSpinner] = useState(false);

  let message;

  if( spinner ) {
    message = <Spinner />
  } else if ( total === 0 ) {
    message = <Message />
  } else { 
    message = <Result
                total={total}
                months={months}
                quantity={quantity}
               />
  }

  return (
    <Fragment>
      <Header 
        title='Loans App'
        description = 'Use the form to calculate the loan.'
      />

      <div className='container'>
        <Form 
          quantity={quantity}
          setQuantity={setQuantity}
          months={months}
          setMonths={setMonths}
          total={total}
          setTotal={setTotal}
          setSpinner={setSpinner}
        />
        <div className="messages">
          {message}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
