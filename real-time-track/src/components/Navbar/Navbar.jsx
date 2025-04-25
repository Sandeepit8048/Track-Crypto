import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../Context/CoinContext';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  };

  return (
    <nav className="navbar bg-gray-800 text-white px-6 py-4 flex items-center justify-between relative">

      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-xl font-bold">Cryptoline</span>
      </Link>

      <ul className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="hover:text-gray-400"><li>Home</li></Link>
        <Link to="/Features" className="hover:text-gray-400"><li>Features</li></Link>
      </ul>

      <div className="hidden md:flex items-center space-x-4">
        <select
          onChange={currencyHandler}
          className="bg-gray-700 text-white px-3 py-2 rounded focus:outline-none"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        <Link to="/signup">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Sign up <img src={arrow_icon} alt="arrow" className="w-4 h-4 ml-2" />
          </button>
        </Link>
      </div>


      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>


      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white px-6 py-4 flex flex-col space-y-4 md:hidden z-50 shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/Features" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
            Features
          </Link>

          <select
            onChange={currencyHandler}
            className="bg-gray-700 text-white px-3 py-2 rounded focus:outline-none"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>

          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Sign up <img src={arrow_icon} alt="arrow" className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
