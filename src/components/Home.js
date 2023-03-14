import React from 'react'
import dummyJson from './dummy.json'

function Home() {

  // const dummyJson = dummyJson;

  return (
      <div className='home' class='grid h-screen place-items-center'>
        
        <div class="max-w-lg rounded overflow-hidden shadow-lg">
            
            <img class="w-full" src='MyImages/richwilliamsmith1.jpg'></img>
            
            <div class="px-6 py-4">
                
                <div class="font-bold text-xl mb-2">Welcome to </div>
                <p class="text-3xl font-bold text-blue-900 mb-2">StocksJaeger</p>
                <p class="text-gray-700 text-base">Home for the ETF, Crypto and Forex hunters</p>
            </div>

            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PhotoBy</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RichSmith</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Unsplash</span>
            </div>
        </div>
        {/* <p>{JSON.stringify(dummyJson)}</p> */}
    </div>
  )
}

// https://api.polygon.io/v2/reference/news?limit=8&apiKey=HejgMzRaFDg5NzNBEvTWgfYgwpTje9Sa
// https://polygon.io/docs/stocks/get_v2_reference_news
// https://twelvedata.com/account/market-data

export default Home