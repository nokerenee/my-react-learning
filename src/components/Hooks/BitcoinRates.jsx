// Exercise 1 & 2 & 3:

import useBitcoinPrice from "./UseBitcoinPrice"; // Import the custom hook
import Emoji from "./Emoji";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const { currency, setCurrency, bitcoinPrice } = useBitcoinPrice(
    currencies[0]
  );

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {bitcoinPrice !== null ? (
        <p>
          1 Bitcoin (BTC) = {bitcoinPrice} {currency}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <Emoji />
    </div>
  );
}

export default BitcoinRates;
