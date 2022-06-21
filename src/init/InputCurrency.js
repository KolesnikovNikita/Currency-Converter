import React from 'react';

function InputCurrency({amount, currency, currencies, onAmountChange, onCurrencyChange}) {
    
  return (
      <div className="group">
          <input type='text' value={amount} onChange={event => onAmountChange(event.target.value)} />
          <select value={currency} onChange={event => onAmountChange(event.target.value)}>
              {currencies.map((currency => (
                  <option value={currency}>{currency}</option>
              )))}
          </select>
      </div>
  );
}

export default InputCurrency;