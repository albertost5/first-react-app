import React from 'react';

const Form = ({quantity, setQuantity, months, setMonths}) => {

    return (
        <form>
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
    );
}
 
export default Form;