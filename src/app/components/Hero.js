"use client"
import React from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-stone-300">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Find Out About The Vast Opportunities Investing In Rare Whiskey & Wine</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Earn safe & secure returns of 9-12% per annum investing in one of the best performing collectible asset of the last 10 years</p>
		<div className="flex flex-wrap justify-center">
			<Link to="howitworks" spy={true} smooth={true} offset={10} duration={500} className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700 hover:bg-black hover:text-white cursor-pointer">Learn more</Link>
		</div>
	</div>
</section>
  )
}

export default Hero