import News from "./News";
import Particle from "./Particle";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold mt-10">Welcome to</p>
      <p className="text-7xl font-bold text-blue-900 mb-3">Stocks Jaeger</p>
      <p className="text-1xl font-bold mb-8">
        Home for the ETF, Crypto and Forex hunters
      </p>

      <img
        className="place-items-center p-3 display-flex rounded-3xl"
        src="MyImages/neon.jpeg"
      ></img>
      {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PhotoBy</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RichSmith</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Unsplash</span> */}

      <div className="grid mt-8 place-items-center">
        <News />
        <Particle />
      </div>
    </div>
  );
}
