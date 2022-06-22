import React from 'react';
import './index.css';
function InputCurrency({currencies, amount, currency, onAmountChange, onCurrencyChange}) {
    
  return (
      <div className="group">
          <input type='text' value={amount} onChange={(event) => onAmountChange(event.target.value)} />
          <select value={currency} onChange={(event) => onCurrencyChange(event.target.value)}>
              {currencies.map((currency => (
                  <option value={currency}>{currency}</option>
              )))}
          </select>
      </div>
  );
}

export default InputCurrency;