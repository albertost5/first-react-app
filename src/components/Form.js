import React, { useState, Fragment } from 'react';
import { calculateTotal } from '../helpers.js';

const Form = ( props ) => {

    const {quantity, setQuantity, months, setMonths, setTotal, setSpinner} = props;

    const [error, setError] = useState(false);

    const calculateLoan = (e) => {
        e.preventDefault();
        
        if ( quantity === 0 || months === 0 ) {
            setError(true);
            return;
        }

        setError(false);
        
        // Show Spinner
        setSpinner(true);

        setTimeout(() => {     
            // Show loan result
            const result = calculateTotal(quantity, months);
    
            // Change result 
            setTotal(result);

            // Hide spinner
            setSpinner(false);
        }, 3000);
    }

    return (
        <Fragment>

            <form onSubmit={calculateLoan}>
              <div className="row">
                  <div>
                      <label>Loan Amount</label>
                      <input 
                          className="u-full-width" 
                          type="number" 
                          placeholder="Eg: 3000"
                          onChange={ e => setQuantity( parseInt(e.target.value) )}
                      />
                  </div>
                  <div>
                      <label>Deadline to Pay</label>
                      <select 
                          className="u-full-width"
                          onChange={ e => setMonths( parseInt( e.target.value ) )}
                      >
                          <option value="">Select</option>
                          <option value="3">3 M</option>
                          <option value="6">6 M</option>
                          <option value="12">12 M</option>
                          <option value="24">24 M</option>
                      </select>
                  </div>
                  <div>
                      <input 
                          type="submit" 
                          value="Calcualte" 
                          className="button-primary u-full-width" 
                      />
                  </div>
              </div>
              
            </form>
        
            { (error) ? <p className="error">All the fields are required!</p> : null }

        </Fragment>
    );
}
 
export default Form;