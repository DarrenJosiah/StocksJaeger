import React from "react";
import { Link } from "react-router-dom";
import dummyJson from "../dummy.json";
import CryptoItem from "./CryptoItem";

function CryptoTable({ cryptoJson }) {
  // https://www.livecoinwatch.com/
  // https://livecoinwatch.github.io/lcw-api-docs/#coinslist

  return (
    <div className='m-8'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800">
                            Rank 
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                            Coin
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                            Market Cap
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800">
                            24h Volume
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                            All-Time High (USD)
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800">
                            1H
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                            1D
                        </th>
                    </tr>
                </thead>
                <tbody> 
                        {cryptoJson.map(crypto => {
                            return (
                            <tr key={crypto.code} className="border-b border-gray-200 dark:border-gray-700 dark:text-white">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                                    <span>{crypto.rank}</span>
                                </th>
                                <Link to={`/crypto/${crypto.name}`} state={{ crypto: crypto}} element={<CryptoItem/>} key={crypto.code}>
                                <td className="px-6 py-4 flex flex-row items-center bg-gray-50 dark:bg-gray-700 hover:font-bold">
                                    <img className='mr-4' src={crypto.png32}></img>
                                    <div className='flex flex-col items-start'>
                                        <span>{crypto.name}</span>
                                        <small>{crypto.code}</small>
                                    </div>
                                </td>
                                </Link>
                                <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                    ${crypto.rate.toFixed(2)}
                                </td>
                                {
                                    (crypto.cap/10000000000).toFixed(2) >= 1 ?
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                                        ${(crypto.cap/10000000000).toFixed(2)}B
                                    </td>
                                    :
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                                        ${(crypto.cap/10000000).toFixed(2)}M
                                    </td>
                                }
                                {
                                    (crypto.volume/10000000000).toFixed(2) >= 1 ?
                                    <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                        ${(crypto.volume/10000000000).toFixed(2)}B
                                    </td>
                                    :
                                    <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                        ${(crypto.volume/10000000).toFixed(2)}M
                                    </td>
                                }
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                                    ${crypto.allTimeHighUSD.toFixed(2)}
                                </td>
                                { 
                                    crypto.delta.hour.toFixed(2) >= 1 ?
                                    <td className="px-6 bg-green-100 dark:bg-green-500">
                                        {crypto.delta.hour.toFixed(2)}%
                                    </td>
                                    :
                                    <td className="px-6 bg-red-100 dark:bg-red-500">
                                        {crypto.delta.hour.toFixed(2)}%
                                    </td>
                                }
                                { 
                                    crypto.delta.day.toFixed(2) >= 1 ?
                                    <td className="px-6 bg-green-100 dark:bg-green-500">
                                        {crypto.delta.day.toFixed(2)}%
                                    </td>
                                    :
                                    <td className="px-6 bg-red-100 dark:bg-red-500">
                                        {crypto.delta.day.toFixed(2)}%
                                    </td>
                                }
                            </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    </div>
  )

}

export default CryptoTable;
