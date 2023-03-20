import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoTable from "./CryptoTable";
import Particle from "../Home/Particle";

export default function Crypto() {
  const [cryptoJson, setCryptoJson] = useState(null);

  const url =
    "https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/2023-01-17?adjusted=true&apiKey=HejgMzRaFDg5NzNBEvTWgfYgwpTje9Sa";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCryptoJson(res.data.results);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cryptoJson]);

  return (
    <div>
      <p class="text-3xl font-bold mt-10">Hunting for</p>
      <p class="text-7xl font-bold text-blue-900 mb-3">Crypto</p>
      <p class="text-1xl font-bold">♦ ♦</p>
      <p class="text-1xl font-bold mb-8">♦</p>
      {/* <CryptoTable/> */}
      <Particle />
      {cryptoJson && <CryptoTable cryptoJson={cryptoJson} />}
    </div>
  );
}
