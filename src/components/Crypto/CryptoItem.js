import React from 'react'
import { useLocation } from 'react-router-dom';

// 3rd Party Libraries
import { faDiscord, faInstagram, faMedium, faReddit, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEarth, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particle from '../Home/Particle';

export default function CryptoItem() {
  let { state } = useLocation();
  const cryptoItem = state.crypto;
  
  return (
    <div>
        <p className="text-3xl font-bold mt-10">Hunting for</p>
        <p className="text-7xl font-bold text-blue-900 mb-3" style={{color: cryptoItem.color}}>{cryptoItem.name}</p>
        {/* <img className="rounded-full " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"> */}
        <img className='mx-auto w-12 h-12 mb-3' src={cryptoItem.png64}></img>
        <p className="text-1xl font-bold mb-8">♦</p>
      
        {/* Card */}
        <div className="mx-8 mb-3 grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-2">
            {/* 1st Grid */}
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <h1 className='text-2xl font-bold mb-5' style={{color: cryptoItem.color}}>Facts</h1>
                <blockquote className="flex flex-col max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">Rank:</h3>
                    <p className='text-md px-3 bg-gray-100 rounded-2xl'>{cryptoItem.rank}</p>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">Market Cap:</h3>
                    <p className='text-md px-3 bg-gray-100 rounded-2xl'>
                      {
                        (cryptoItem.cap/10000000000).toFixed(2) >= 1 ?
                        <React.Fragment>
                            ${(cryptoItem.cap/10000000000).toFixed(2)}B
                        </React.Fragment>
                        :
                        <React.Fragment>
                            ${(cryptoItem.cap/10000000).toFixed(2)}M
                        </React.Fragment>
                      }
                      </p>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">Volume:</h3>
                    <p className='text-md px-3 bg-gray-100 rounded-2xl'>
                      {
                        (cryptoItem.volume/10000000000).toFixed(2) >= 1 ?
                        <React.Fragment>
                            ${(cryptoItem.volume/10000000000).toFixed(2)}B
                        </React.Fragment>
                        :
                        <React.Fragment>
                            ${(cryptoItem.volume/10000000).toFixed(2)}M
                        </React.Fragment>
                      }
                    </p>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">All-Time High (USD):</h3>
                    <p className='text-md px-3 bg-gray-100 rounded-2xl'>${cryptoItem.allTimeHighUSD.toFixed(2)}</p>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">Circulating Supply:</h3>
                    <p className='text-md px-3 bg-gray-100 rounded-2xl'>
                      {
                        (cryptoItem.circulatingSupply/1000000).toFixed(2) >= 1 ?
                        <React.Fragment>
                            ${(cryptoItem.circulatingSupply/1000000).toFixed(2)}M
                        </React.Fragment>
                        :
                        <React.Fragment>
                            ${(cryptoItem.circulatingSupply/1000).toFixed(2)}K
                        </React.Fragment>
                      }
                    </p>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">Total Supply:</h3>
                    <p className='text-md px-3 bg-gray-100 rounded-2xl'>
                      {
                        (cryptoItem.totalSupply/1000000).toFixed(2) >= 1 ?
                        <React.Fragment>
                            {(cryptoItem.totalSupply/1000000).toFixed(2)}M
                        </React.Fragment>
                        :
                        <React.Fragment>
                            {(cryptoItem.totalSupply/1000).toFixed(2)}K
                        </React.Fragment>
                      }
                    </p>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">Max Supply:</h3>
                    <p className='text-md px-3 bg-gray-100 rounded'>
                      {
                        (cryptoItem.maxSupply/1000000).toFixed(2) >= 1 ?
                        <React.Fragment>
                            {(cryptoItem.maxSupply/1000000).toFixed(2)}M
                        </React.Fragment>
                        :
                        <React.Fragment>
                            {(cryptoItem.maxSupply/1000).toFixed(2)}K
                        </React.Fragment>
                      }
                    </p>
                  </div>
                </blockquote>
            </figure>
  
            {/* 2nd Grid */}
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <h1 className='text-2xl font-bold mb-5' style={{color: cryptoItem.color}}>Delta</h1>
                <blockquote className="flex flex-col max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">1H:</h3>
                    <React.Fragment>
                      { 
                        cryptoItem.delta.hour.toFixed(2) >= 1 ?
                        <p className="text-md px-3 rounded-2xl bg-green-100 dark:bg-green-500">
                            {cryptoItem.delta.hour.toFixed(2)}%
                        </p>
                        :
                        <p className="text-md px-3 rounded-2xl bg-red-100 dark:bg-red-500">
                            {cryptoItem.delta.hour.toFixed(2)}%
                        </p>
                      }
                      </React.Fragment>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">24H:</h3>
                    <React.Fragment>
                      { 
                        cryptoItem.delta.day.toFixed(2) >= 1 ?
                        <p className="text-md px-3 rounded-2xl bg-green-100 dark:bg-green-500">
                            {cryptoItem.delta.day.toFixed(2)}%
                        </p>
                        :
                        <p className="text-md px-3 rounded-2xl bg-red-100 dark:bg-red-500">
                            {cryptoItem.delta.day.toFixed(2)}%
                        </p>
                      }
                      </React.Fragment>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">7D:</h3>
                    <React.Fragment>
                      { 
                        cryptoItem.delta.week.toFixed(2) >= 1 ?
                        <p className="text-md px-3 rounded-2xl bg-green-100 dark:bg-green-500">
                            {cryptoItem.delta.week.toFixed(2)}%
                        </p>
                        :
                        <p className="text-md px-3 rounded-2xl bg-red-100 dark:bg-red-500">
                            {cryptoItem.delta.week.toFixed(2)}%
                        </p>
                      }
                      </React.Fragment>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">30D:</h3>
                    <React.Fragment>
                      { 
                        cryptoItem.delta.month.toFixed(2) >= 1 ?
                        <p className="text-md px-3 rounded-2xl bg-green-100 dark:bg-green-500">
                            {cryptoItem.delta.month.toFixed(2)}%
                        </p>
                        :
                        <p className="text-md px-3 rounded-2xl bg-red-100 dark:bg-red-500">
                            {cryptoItem.delta.month.toFixed(2)}%
                        </p>
                      }
                      </React.Fragment>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">3M:</h3>
                    <React.Fragment>
                      { 
                        cryptoItem.delta.quarter.toFixed(2) >= 1 ?
                        <p className="text-md px-3 rounded-2xl bg-green-100 dark:bg-green-500">
                            {cryptoItem.delta.quarter.toFixed(2)}%
                        </p>
                        :
                        <p className="text-md px-3 rounded-2xl bg-red-100 dark:bg-red-500">
                            {cryptoItem.delta.quarter.toFixed(2)}%
                        </p>
                      }
                      </React.Fragment>
                  </div>
                  <div className='flex flex-row mb-1 justify-center'>
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mr-2">1Y:</h3>
                    <React.Fragment>
                      { 
                        cryptoItem.delta.year.toFixed(2) >= 1 ?
                        <p className="text-md px-3 rounded-2xl bg-green-100 dark:bg-green-500">
                            {cryptoItem.delta.year.toFixed(2)}%
                        </p>
                        :
                        <p className="text-md px-3 rounded-2xl bg-red-100 dark:bg-red-500">
                            {cryptoItem.delta.year.toFixed(2)}%
                        </p>
                      }
                      </React.Fragment>
                  </div>
                </blockquote>
            </figure>
            
        </div>
            {/* 3rd Grid */}
            <div className="mx-8 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
              <h1 className='text-2xl font-bold mb-5' style={{color: cryptoItem.color}}>Links</h1>
                <blockquote className="flex flex-col max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <div className='flex flex-row flex-wrap mb-1 justify-center'>
                    {cryptoItem.links.website && 
                      <a href={cryptoItem.links.website} title='Company Website'><FontAwesomeIcon icon={faEarth} className='text-4xl p-2 rounded-2xl' style={{color: '#000'}}/></a>
                    }
                    {cryptoItem.links.whitepaper && 
                      <a href={cryptoItem.links.whitepaper} title='Whitepaper'><FontAwesomeIcon icon={faFile} className='text-4xl p-2 rounded-2xl' style={{color: '#000'}}/></a>
                    }
                    {cryptoItem.links.twitter && 
                      <a href={cryptoItem.links.twitter} title='Twitter'><FontAwesomeIcon icon={faTwitter} className='text-4xl p-2 rounded-2xl' style={{color: '#1DA1F2'}}/></a>
                    }
                    {cryptoItem.links.reddit && 
                      <a href={cryptoItem.links.reddit} title='Reddit'><FontAwesomeIcon icon={faReddit} className='text-4xl p-2 rounded-2xl' style={{color: '#FF5700'}}/></a>
                    }
                    {cryptoItem.links.telegram && 
                      <a href={cryptoItem.links.telegram} title='Telegram'><FontAwesomeIcon icon={faTelegram} className='text-4xl p-2 rounded-2xl' style={{color: '#2AABEE'}}/></a>
                    }
                    {cryptoItem.links.discord && 
                      <a href={cryptoItem.links.discord} title='Discord'><FontAwesomeIcon icon={faDiscord} className='text-4xl p-2 rounded-2xl' style={{color: '#7289da'}}/></a>
                    }
                    {cryptoItem.links.medium && 
                      <a href={cryptoItem.links.medium} title='<Medium>'><FontAwesomeIcon icon={faMedium} className='text-4xl p-2 rounded-2xl' style={{color: '#000000'}}/></a>
                    }
                    {cryptoItem.links.instagram && 
                      <a href={cryptoItem.links.instagram} title='Instagram'><FontAwesomeIcon icon={faInstagram} className='text-4xl p-2 rounded-2xl' style={{color: '#F77737'}}/></a>
                    }
                  </div>
                </blockquote>
            </figure>
            </div>
        <Particle />
    </div>
  )
}