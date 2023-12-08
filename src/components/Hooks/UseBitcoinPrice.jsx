// Exercise 2:

import { useState, useEffect, useReducer } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

const bitcoinReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return { ...state, currency: action.payload };
    case "SET_BITCOIN_PRICE":
      return {
        ...state,
        bitcoinPrice: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};

const initialState = {
  currency: currencies[0],
  bitcoinPrice: null,
  loading: false,
  error: null,
};

function useBitcoinPrice(initialCurrency) {
  const [state, dispatch] = useReducer(bitcoinReducer, initialState);

  const fetchBitcoinPrice = () => {
    dispatch({ type: "FETCH_START" });

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${state.currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_BITCOIN_PRICE",
          payload: data.bitcoin[state.currency],
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error });
        console.error("Error fetching Bitcoin price:", error);
      });
  };

  useEffect(() => {
    fetchBitcoinPrice();
  }, [state.currency]);

  return {
    ...state,
    setCurrency: (newCurrency) =>
      dispatch({ type: "SET_CURRENCY", payload: newCurrency }),
  };
}

export default useBitcoinPrice;
