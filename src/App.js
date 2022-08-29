import Header from './components/Header.js';
import Form from './components/Form.js';
import React, { Fragment, useState } from 'react'


function App() {

  // Define state
  const [quantity, setQuantity] = useState(0);
  const [months, setMonths] = useState(0);

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
        />
      </div>
    </Fragment>
  );
}

export default App;
