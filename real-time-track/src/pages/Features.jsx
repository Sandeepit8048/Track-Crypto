import React from 'react'

function Features() {
  return (
    <div className="features-container px-6 py-8 bg-gray-100 text-gray-800">
      <p className="text-lg mb-6">
        Cryptocurrency offers numerous benefits, including fast and low-cost global transactions, enhanced security through blockchain technology, and financial freedom without the need for traditional banks. It allows for 24/7 trading, ensures privacy, and provides access to financial services for the unbanked. Investors are drawn to its high return potential and decentralized nature, while developers leverage smart contracts for innovative applications in finance, gaming, and more. Overall, cryptocurrency empowers individuals with full ownership and control over their digital assets in a borderless and transparent system.
      </p>
      <div className="currencies space-y-4">
        <h3 className="text-xl font-semibold">
          USD (US Dollar) –
          <p className="text-base text-gray-600">
            The world's most dominant reserve currency, widely used in global trade.
          </p>
        </h3>
        <h3 className="text-xl font-semibold">
          EUR (Euro) –
          <p className="text-base text-gray-600">
            The official currency of the Eurozone, used by 20 European countries.
          </p>
        </h3>
        <h3 className="text-xl font-semibold">
          INR (Indian Rupee) –
          <p className="text-base text-gray-600">
            The currency of India, managed by the Reserve Bank of India.
          </p>
        </h3>
        <h3 className="text-xl font-semibold">
          GBP (British Pound Sterling) –
          <p className="text-base text-gray-600">
            The UK’s currency, one of the oldest still in use.
          </p>
        </h3>
        <h3 className="text-xl font-semibold">
          JPY (Japanese Yen) –
          <p className="text-base text-gray-600">
            Japan’s currency and one of the most traded in Asia.
          </p>
        </h3>
        <h3 className="text-xl font-semibold">
          CNY (Chinese Yuan) –
          <p className="text-base text-gray-600">
            Official currency of China; often used in global trade.
          </p>
        </h3>
        <h3 className="text-xl font-semibold">
          CAD (Canadian Dollar) –
          <p className="text-base text-gray-600">
            Canada's official currency; strong in natural resource exports.
          </p>
        </h3>
        <h3 className="text-xl font-semibold">
          AUD (Australian Dollar) –
          <p className="text-base text-gray-600">
            Used in Australia; often affected by commodity prices.
          </p>
        </h3>
      </div>
    </div>
  )
}

export default Features