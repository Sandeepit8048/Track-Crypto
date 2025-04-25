import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    // State to store all coin data fetched from the API
    const [allCoin, setAllCoin] = useState([]);

    // State to store the selected currency (default: USD)
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    // Function to fetch all coin data from the API based on the selected currency
    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-vr9q42xzksSXXNze9mYXezYy' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response)) // Update the state with fetched coin data
            .catch(err => console.error(err)); // Log any errors
    };

    // useEffect to refetch coin data whenever the selected currency changes
    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    // Context value to provide state and functions to child components
    const contextValue = {
        allCoin, 
        currency, 
        setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;