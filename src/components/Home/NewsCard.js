import React from 'react'

function NewsCard(props) {
  return (
    <div>
        {props.newsJson.results.map(data => {
        return (
          <div class='mb-8'>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src={data.image_url} alt="" />
            </a>
            <div class="p-5">
                
            <div class='text-left'>
              {data.tickers.map(ticker => {
                  return <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-gray-900">#{ticker}</span>
                })}
                </div>
              
              <a href="#">
                <h5 class="text-left mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
              </a>
              <p class="text-left mb-8 font-normal text-gray-700 dark:text-gray-400">
                {data.description}
              </p>
              
              <div class='flex justify-between mt-6'>
                <div class="flex items-center text-left">
                    <img class="w-10 h-10 rounded-full mr-4" src={data.publisher.favicon_url} alt="Avatar of Jonathan Reinink" />
                    <div class="text-sm">
                      <p class="text-gray-900 leading-none dark:text-white">{data.publisher.name}</p>
                      <p class="text-gray-600 dark:text-gray-400">Aug 18</p>
                    </div>
                  </div>
                  <a href={data.article_url} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NewsCard