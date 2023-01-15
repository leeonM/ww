import Link from 'next/link'
import React from 'react'

const News = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 bg-stone-300 pb-12">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8" id="news">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl pb-16">In The News</h2>
		<div className="divide-y divide-gray-700 pb-10">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0 text-center">
				<h3 className=" md:col-span-5">Whiskey becomes top collectable investment</h3>
				<p className="md:pl-0 md:col-span-7"><a target="_blank" href="https://www.cnbc.com/video/2022/12/09/whisky-becomes-top-collectable-investment-beating-out-art-and-cars.html" rel="noopener noreferrer"><button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-20 w-1/2 py-3 text-base font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2  hover:bg-black hover:text-white bg-stone-300 border-white">
                Find Out More - CNBC Report
                </button></a></p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0 text-center">
				<h3 className="md:col-span-5">I made £500,000 from investing in fine wine</h3>
                <p className="md:pl-0 md:col-span-7"><a target="_blank" href="https://www.thetimes.co.uk/money-mentor/story/made-money-investing-wine/" rel="noopener noreferrer"><button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-20 w-1/2 py-3 text-base font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2  hover:bg-black hover:text-white bg-stone-300 border-white">
                Find Out More - Times Article
                </button></a></p>
                </div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0 text-center">
				<h3 className="md:col-span-5">Rare Scotch whisky prices surge on investor flight to safety</h3>
                <p className="md:pl-0 md:col-span-7"><a target="_blank" href="https://www.ft.com/content/130a8528-43b4-453e-bd65-448fd40c5e5d" rel="noopener noreferrer"><button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-20 w-1/2 py-3 text-base font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2  hover:bg-black hover:text-white bg-stone-300 border-white">
                Find Out More - Financial Times Article
                </button></a></p>
                </div>
		</div>
	</div>
</section>
  )
}

export default News