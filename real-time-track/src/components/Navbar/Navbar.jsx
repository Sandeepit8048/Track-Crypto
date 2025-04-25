import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  }

  return (
    <div className="navbar flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <Link to={'/'} className="logo-container flex items-center">
        <img src={logo} alt="" className="logo w-10 h-10 mr-2" />
        <span className="logo-text text-xl font-bold">Cryptoline</span>
      </Link>

      <ul className="flex space-x-6">
        <Link to={'/'} className="hover:text-gray-400"><li>Home</li></Link>
        <li className="hover:text-gray-400">Features</li>
        <li className="hover:text-gray-400">Pricing</li>
        <li className="hover:text-gray-400">Blog</li>
      </ul>

      <div className="nav-right flex items-center space-x-4">
        <select
          onChange={currencyHandler}
          className="bg-gray-700 text-white px-3 py-2 rounded focus:outline-none"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Sign up <img src={arrow_icon} alt="" className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  )
}

export default Navbar