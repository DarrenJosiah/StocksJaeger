import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoTable from "./CryptoTable";
import Particle from "../Home/Particle";

export default function Crypto() {
  const [cryptoJson, setCryptoJson] = useState(null);

  const url = "https://api.livecoinwatch.com/coins/list";

  const data = {
    currency: "USD",
    sort: "rank",
    order: "ascending",
    offset: 0,
    limit: 50,
    meta: true,
  };

  const headers = {
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.REACT_APP_CRYPTO_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .post(url, data, headers)
      .then((res) => {
        setCryptoJson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cryptoJson]);

  return (
    <div>
      <p className="text-3xl font-bold mt-10">Hunting for</p>
      <p className="text-7xl font-bold text-blue-900 mb-3">Crypto</p>
      <p className="text-1xl font-bold">♦ ♦</p>
      <p className="text-1xl font-bold mb-8">♦</p>
      <CryptoTable/>
      <Particle />
      {/* {cryptoJson && <CryptoTable cryptoJson={cryptoJson} />} */}
    </div>
  );
}
