import InputCurrency from '../init/InputCurrency';
import { useState, useEffect } from 'react';
import API from '../api/axios';

function OptionField() {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('UAH');
    const [rates, setRates] = useState([])

    useEffect(() => {
        API.get().then(response => setRates(response.data.rates))
    }, [])

    useEffect(() => {
      if(!!rates) {
        handleAmount1Change(amount1)
      }
    }, [rates])

    function format(number) {
      return number.toFixed(4)
    }

    function handleAmount1Change(amount1) {
      setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
      setAmount1(amount1)
    }

    function handleCurrency1Change(currency1) {
      setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
      setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
      setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
      setAmount2(amount2)
    }

    function handleCurrency2Change(currency2) {
      setAmount2(format(amount2 * rates[currency1] / rates[currency2]));
      setCurrency2(currency2);
    }

  return (
      <div>
          <InputCurrency currencies={Object.keys(rates)} onCurrencyChange={handleCurrency1Change} onAmountChange={handleAmount1Change} amount={amount1} currency={currency1} />
          <InputCurrency currencies={Object.keys(rates)} onCurrencyChange={handleCurrency2Change} onAmountChange={handleAmount2Change} amount={amount2} currency={currency2} />
      </div>
  );
}

export default OptionField;