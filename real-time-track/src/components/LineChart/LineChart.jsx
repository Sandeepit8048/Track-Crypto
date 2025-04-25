import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({ historicalData }) => {
  // State to store the formatted data for the chart
  const [data, setData] = useState(["Date", "Prices"])

  // useEffect to process historical data and format it for the chart
  useEffect(() => {
    let dataCopy = [["Date", "Prices"]]; // Initialize the data array with headers
    if (historicalData.prices) {
      // Map through historical data and format it as [Date, Price]
      historicalData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
      })
      setData(dataCopy); // Update the state with the formatted data
    }
  }, [historicalData]) // Dependency array ensures this runs when historicalData changes

  // Render the LineChart component using react-google-charts
  return (
    <Chart
      chartType='LineChart' // Specify the type of chart
      data={data} // Pass the formatted data to the chart
      height="100%" // Set the height of the chart
      legentToggle // Enable legend toggle
    />
  )
}

export default LineChart