import React from 'react'

function Features() {
  return (
    <div className="features-container px-6 py-8 bg-gray-100 text-gray-800">
      <p className="text-lg mb-6">
        Cryptocurrency offers numerous benefits, including fast and low-cost global transactions, enhanced security through blockchain technology, and financial freedom without the need for traditional banks. It allows for 24/7 trading, ensures privacy, and provides access to financial services for the unbanked. Investors are drawn to its high return potential and decentralized nature, while developers leverage smart contracts for innovative applications in finance, gaming, and more. Overall, cryptocurrency empowers individuals with full ownership and control over their digital assets in a borderless and transparent system.
      </p>
      <div className="currencies space-y-4">
        <div className="text-xl font-semibold">
          USD (US Dollar) – 
          <span className="text-base text-gray-600">
            The world's most dominant reserve currency, widely used in global trade.
          </span>
        </div>
        <div className="text-xl font-semibold">
          EUR (Euro) – 
          <span className="text-base text-gray-600">
            The official currency of the Eurozone, used by 20 European countries.
          </span>
        </div>
        <div className="text-xl font-semibold">
          INR (Indian Rupee) – 
          <span className="text-base text-gray-600">
            The currency of India, managed by the Reserve Bank of India.
          </span>
        </div>
        <div className="text-xl font-semibold">
          GBP (British Pound Sterling) – 
          <span className="text-base text-gray-600">
            The UK’s currency, one of the oldest still in use.
          </span>
        </div>
        <div className="text-xl font-semibold">
          JPY (Japanese Yen) – 
          <span className="text-base text-gray-600">
            Japan’s currency and one of the most traded in Asia.
          </span>
        </div>
        <div className="text-xl font-semibold">
          CNY (Chinese Yuan) – 
          <span className="text-base text-gray-600">
            Official currency of China; often used in global trade.
          </span>
        </div>
        <div className="text-xl font-semibold">
          CAD (Canadian Dollar) – 
          <span className="text-base text-gray-600">
            Canada's official currency; strong in natural resource exports.
          </span>
        </div>
        <div className="text-xl font-semibold">
          AUD (Australian Dollar) – 
          <span className="text-base text-gray-600">
            Used in Australia; often affected by commodity prices.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Features