import News from './News';
import Particle from './Particle';

function Home() {
  return (
    <div>
      <p class="text-3xl font-bold mt-10">Welcome to</p>
      <p class="text-7xl font-bold text-blue-900 mb-3">Stocks Jaeger</p>
      <p class="text-1xl font-bold mb-8">Home for the ETF, Crypto and Forex hunters</p>
    
      <img class="place-items-center p-3 display-flex rounded-3xl" src='MyImages/neon.jpeg'></img>
      {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PhotoBy</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RichSmith</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Unsplash</span> */}

      <p class="text-3xl font-bold mt-10">Very cool</p>
      <p class="text-7xl font-bold text-blue-900 mb-3">News</p>
      <p class="text-1xl font-bold mb-8">Helps to make informed decisions</p>
      <div className='home' class='grid mt-8 place-items-center'>
        <News />
        <Particle />
      </div>
      </div>
  )
}

export default Home