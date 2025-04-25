import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../Context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === '') {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    if (Array.isArray(allCoin) && allCoin.length > 0) {
      setDisplayCoin(allCoin);
    }
  }, [allCoin]);

  return (
    <div className="home px-4 py-8 bg-gray-100 min-h-screen">
      <div className="hero text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
          All Cryptocurrencies
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mb-5">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more!
        </p>

        <form
          onSubmit={searchHandler}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search crypto..."
            required
            className="border border-gray-300 rounded px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <datalist id="coinlist">
            {Array.isArray(allCoin) &&
              allCoin.map((item, index) => (
                <option key={index} value={item.name} />
              ))}
          </datalist>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      <div className="crypto-table w-full max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-x-auto">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 p-4 border-b text-gray-700 font-semibold text-sm sm:text-base">
          <p>#</p>
          <p>Coins</p>
          <p className="hidden sm:block">Price</p>
          <p className="hidden sm:block text-center">24H Change</p>
          <p className="hidden sm:block">Market Cap</p>
        </div>

        {Array.isArray(displayCoin) &&
          displayCoin.slice(0, 25).map((item, index) => (
            <Link
              to={`/coin/${item.id}`}
              className="grid grid-cols-3 sm:grid-cols-5 gap-4 p-4 border-b text-sm sm:text-base hover:bg-gray-50 transition"
              key={index}
            >
              <p>{item.market_cap_rank}</p>
              <div className="flex items-center gap-2">
                <img src={item.image} alt={item.name} className="w-6 h-6" />
                <span className="truncate">{item.name} - {item.symbol.toUpperCase()}</span>
              </div>
              <p className="hidden sm:block">
                {currency.symbol} {item.current_price.toLocaleString()}
              </p>
              <p
                className={`hidden sm:block text-center ${
                  item.price_change_percentage_24h > 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {item.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="hidden sm:block">
                {currency.symbol} {item.market_cap.toLocaleString()}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
