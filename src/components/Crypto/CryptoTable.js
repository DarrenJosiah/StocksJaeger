import React from "react";
import dummyJson from "../dummy.json";

function CryptoTable({ cryptoJson }) {
  // https://www.livecoinwatch.com/
  // https://livecoinwatch.github.io/lcw-api-docs/#coinslist

  return (
    <div className="m-8">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
              >
                Rank
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                Coin
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
              >
                Price
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                Market Cap
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
              >
                24h Volume
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                All-Time High (USD)
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
              >
                1H
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                1D
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoJson.map((crypto) => {
              return (
                <tr
                  key={crypto.T}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800"
                  >
                    <span>{crypto.index + 1}</span>
                  </th>
                  <td className="px-6 py-4 flex flex-row items-center bg-gray-50">
                    {/* <img className="mr-4" src={crypto.png32}></img> */}
                    <div className="flex flex-col items-start">
                      <span>{crypto.T}</span>
                      <small>{crypto.T}</small>
                    </div>
                  </td>
                  <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                    ${crypto.c.toFixed(2)}
                  </td>
                  {(crypto.n / 10000000000).toFixed(2) >= 1 ? (
                    <td className="px-6 py-4 bg-gray-50">
                      ${(crypto.n / 10000000000).toFixed(2)}B
                    </td>
                  ) : (
                    <td className="px-6 py-4 bg-gray-50">
                      ${(crypto.n / 10000000).toFixed(2)}M
                    </td>
                  )}
                  {(crypto.v / 10000000000).toFixed(2) >= 1 ? (
                    <td className="px-6 py-4 bg-gray-100">
                      ${(crypto.v / 10000000000).toFixed(2)}B
                    </td>
                  ) : (
                    <td className="px-6 py-4 bg-gray-100">
                      ${(crypto.v / 10000000).toFixed(2)}M
                    </td>
                  )}
                  <td className="px-6 py-4 bg-gray-50">
                    ${crypto.h.toFixed(2)}
                  </td>
                  {/* {crypto.delta.hour.toFixed(2) >= 1 ? (
                    <td className="px-6 bg-green-100 dark:bg-gray-800">
                      {crypto.delta.hour.toFixed(2)}%
                    </td>
                  ) : (
                    <td className="px-6 bg-red-100 dark:bg-gray-800">
                      {crypto.delta.hour.toFixed(2)}%
                    </td>
                  )}
                  {crypto.delta.day.toFixed(2) >= 1 ? (
                    <td className="px-6 bg-green-100 dark:bg-gray-800">
                      {crypto.delta.day.toFixed(2)}%
                    </td>
                  ) : (
                    <td className="px-6 bg-red-100 dark:bg-gray-800">
                      {crypto.delta.day.toFixed(2)}%
                    </td>
                  )} */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CryptoTable;
