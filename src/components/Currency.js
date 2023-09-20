import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  useEffect(() => {
    setSelectedCurrency(currency);
  }, [currency]);

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setSelectedCurrency(newCurrency);
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  const selectStyle = {
    width: '150px',
  };

  return (
    <div className="alert alert-success">
      <label className="currency-label">Currency:</label>
      <select
        id="currency"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        style={selectStyle}
      >
        <option value="$"> $ Dollar</option>
        <option value="£"> £ Pound</option>
        <option value="€"> € Euro</option>
        <option value="₹"> ₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;