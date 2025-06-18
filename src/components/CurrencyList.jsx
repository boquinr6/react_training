import { useState, useEffect } from 'react';

const COINS = [
  { id: 'bitcoin', name: 'Bitcoin' },
  { id: 'ethereum', name: 'Ethereum' },
  { id: 'solana', name: 'Solana' },
]

function CurrencyList() {
  const [currencies, setCurrencies] = useState([]);
  const [sortingOrder, setSortingOrder] = useState('dec'); // State to manage sorting order
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch currency data from an API
  useEffect(() => {
    async function fetchCurrencies() {
      setLoading(true);
      setError(null);
      try {
        // we need to get both the current price and the historical price for 7 days
        const results = await Promise.all(COINS.map( async (coin) => {
            // const currentResponse = await fetch(`/api/simple/price?ids=${coin.id}&vs_currencies=usd`);
            // if (!currentResponse.ok) {
            //     throw new Error(`HTTP error! status: ${currentResponse.status}`);
            // }
            // const currentData = await currentResponse.json();
            const historicalResponse = await fetch(`/api/coins/${coin.id}/market_chart?vs_currency=usd&days=7`);
            if (!historicalResponse.ok) {
                throw new Error(`HTTP error! status: ${historicalResponse.status}`);
            }
            const historicalData = await historicalResponse.json();

            // Process and store the data as needed
            // console.log(`Current price of ${coin.name}:`, currentData[coin.id].usd);
            console.log(`Historical prices for ${coin.name}:`, historicalData.prices);

            // get the max price from the historical data
            const max7DayPrice = Math.max(...historicalData.prices.map(price => price[1])); 

            return {
              id: coin.id,
              name: coin.name,
              currentPrice: 20,
              historicalPrices: historicalData.prices,
              max7DayPrice: max7DayPrice
            };

        }));

        // copy the results to a new array 
        const sortedResults = [...results];
        // Sort the results based on the max7Day price in ascending order
        sortedResults.sort((a, b) => {
            if (sortingOrder === 'asc') {
                return a.max7DayPrice - b.max7DayPrice; // Ascending order
            } else {
                return b.max7DayPrice - a.max7DayPrice; // Descending order
            }
        });

        setCurrencies(sortedResults); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrencies();
  }, []);

  if (loading) return <div>Loading currencies...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {currencies.map(currency => (
        <li key={currency.id}>
            <div>Name: {currency.name} </div>
            <div>Current Price: ${currency.currentPrice}</div>
            <div>Max 7-Day Price: ${currency.max7DayPrice}</div>
        </li>
      ))}
    </ul>
  );
}

export default CurrencyList;