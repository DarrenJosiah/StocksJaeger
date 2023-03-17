import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsCard from './NewsCard'

function News() {

  const [newsJson, setNewsJson] = useState(null);

  const url = 'https://api.polygon.io/v2/reference/news?limit=8&apiKey=HejgMzRaFDg5NzNBEvTWgfYgwpTje9Sa'

  useEffect(() => {
    axios.get(url).then((res) => {
      setNewsJson(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return ( 
    <div>
      { newsJson && <NewsCard newsJson={newsJson}/> }     
    </div>
  )
}

// 
// https://polygon.io/docs/stocks/get_v2_reference_news
// https://twelvedata.com/account/market-data

export default News