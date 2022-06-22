import React from 'react';
import './index.css';

function InputCurrency({currencies, amount, currency, onAmountChange, onCurrencyChange}) {
    
  return (
      <div>
          <input className='amount-input' type='text' value={amount} onChange={(event) => onAmountChange(event.target.value)} />
          <select className='currency-select' value={currency} onChange={(event) => onCurrencyChange(event.target.value)}>
              {currencies.map((currency => (
                  <option value={currency}>{currency}</option>
              )))}
          </select>
      </div>
  );
}

export default InputCurrency;