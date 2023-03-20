import React from "react";
import dummyJson from "../dummy.json";

function CryptoTable({ cryptoJson }) {
  // https://www.livecoinwatch.com/
  // https://livecoinwatch.github.io/lcw-api-docs/#coinslist

  return (
    <div class='m-8'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-100 dark:bg-gray-800">
                            Rank 
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                            Coin
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-100 dark:bg-gray-800">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                            Market Cap
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-100 dark:bg-gray-800">
                            24h Volume
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                            All-Time High (USD)
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-100 dark:bg-gray-800">
                            1H
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                            1D
                        </th>
                    </tr>
                </thead>
                <tbody> 
                        {cryptoJson.map(crypto => {
                            return (
                            <tr key={crypto.code} class="border-b border-gray-200 dark:border-gray-700 dark:text-white">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                                    <span>{crypto.rank}</span>
                                </th>
                                <td class="px-6 py-4 flex flex-row items-center bg-gray-50 dark:bg-gray-700">
                                    <img class='mr-4' src={crypto.png32}></img>
                                    <div class='flex flex-col items-start'>

                                        <span>{crypto.name}</span>
                                        <small>{crypto.code}</small>
                                    </div>
                                </td>
                                <td class="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                    ${crypto.rate.toFixed(2)}
                                </td>
                                {
                                    (crypto.cap/10000000000).toFixed(2) >= 1 ?
                                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                                        ${(crypto.cap/10000000000).toFixed(2)}B
                                    </td>
                                    :
                                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                                        ${(crypto.cap/10000000).toFixed(2)}M
                                    </td>
                                }
                                {
                                    (crypto.volume/10000000000).toFixed(2) >= 1 ?
                                    <td class="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                        ${(crypto.volume/10000000000).toFixed(2)}B
                                    </td>
                                    :
                                    <td class="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                        ${(crypto.volume/10000000).toFixed(2)}M
                                    </td>
                                }
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                                    ${crypto.allTimeHighUSD.toFixed(2)}
                                </td>
                                { 
                                    crypto.delta.hour.toFixed(2) >= 1 ?
                                    <td class="px-6 bg-green-100 dark:bg-green-500">
                                        {crypto.delta.hour.toFixed(2)}%
                                    </td>
                                    :
                                    <td class="px-6 bg-red-100 dark:bg-red-500">
                                        {crypto.delta.hour.toFixed(2)}%
                                    </td>
                                }
                                { 
                                    crypto.delta.day.toFixed(2) >= 1 ?
                                    <td class="px-6 bg-green-100 dark:bg-green-500">
                                        {crypto.delta.day.toFixed(2)}%
                                    </td>
                                    :
                                    <td class="px-6 bg-red-100 dark:bg-red-500">
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
