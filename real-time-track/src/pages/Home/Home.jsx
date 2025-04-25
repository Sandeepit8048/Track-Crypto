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
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    if (Array.isArray(allCoin) && allCoin.length > 0) {
      setDisplayCoin(allCoin);
    }
  }, [allCoin]);

  return (
    <div className="home flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
      <div className="hero text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          All Cryptocurrencies
        </h1>
        <div>
          <p className="text-base sm:text-lg text-gray-600 mb-5">
            Welcome to the World's largest Cryptocurrency marketplace. Sign up to explore more about cryptos.
          </p>
          <form onSubmit={searchHandler} className="flex flex-col  sm:flex-col items-center gap-3">
            <input
              onChange={inputHandler}
              list="coinlist"
              value={input}
              type="text"
              placeholder="Search crypto.."
              required
              className="border border-gray-300 rounded px-4 py-2 w-full sm:w-auto"
            />
            <datalist id="coinlist">
              {Array.isArray(allCoin) &&
                allCoin.map((item, index) => (
                  <option key={index} value={item.name} />
                ))}
            </datalist>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="crypto-table w-full max-w-5xl bg-white shadow-md rounded-lg">
        <div className="table-layout grid grid-cols-2 sm:grid-cols-5 gap-4 p-4 border-b border-gray-200 text-gray-700 font-semibold">
          <p>#</p>
          <p>Coins</p>
          <p className="hidden sm:block">Price</p>
          <p className="hidden sm:block text-center">24H Change</p>
          <p className="hidden sm:block market-cap">Market Cap</p>
        </div>
        {Array.isArray(displayCoin) &&
          displayCoin.slice(0, 25).map((item, index) => (
            <Link
              to={`/coin/${item.id}`}
              className="table-layout grid grid-cols-2 sm:grid-cols-5 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50"
              key={index}
            >
              <p>{item.market_cap_rank}</p>
              <div className="flex items-center gap-2">
                <img src={item.image} alt="" className="w-6 h-6" />
                <p>{item.name + ' - ' + item.symbol}</p>
              </div>
              <p className="hidden sm:block">
                {currency.symbol} {item.current_price.toLocaleString()}
              </p>
              <p
                className={`hidden sm:block ${
                  item.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
              <p className="hidden sm:block market-cap">
                {currency.symbol} {item.market_cap.toLocaleString()}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;