import Header from './components/Header.js';
import React, { Fragment } from 'react'


function App() {
  return (
    <Fragment>
      <Header 
        title='Loans App'
        description = 'Use the form to calculate the loan.'
      />
    </Fragment>
  );
}

export default App;
