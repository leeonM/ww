"use client"
import React from 'react'
import Image from 'next/image'

const Partners = (props) => {
  return (
    <div className="bg-stone-300 pb-16" id="partners">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl text-black font-bold text-center mb-20">What We Trade</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 pt-10">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            {/* <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" /> */}
            <Image src={props.logoOne} alt="Bowmore" height={200} width={200} />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <Image src={props.logoTwo} alt="Dalmore" height={200} width={200}  />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <Image src={props.logoThree} alt="Macallan" height={200} width={200}  />

          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <Image src={props.logoFour} alt="Springbank" height={200} width={200}  />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <Image src={props.logoFive} alt="gordonmc" height={200} width={200}  />
          </div>
        </div>
        <div className='text-center mt-16 text-4xl font-bold'>
          With our global network we find the most valuable wines & whiskeys from the most sought after brands such as Macallan, Dalmore and more. We combine the strength of our network, with our flexible strategy and robust forecasting to maximize trade potential. 
        </div>
        <div className='text-center mt-16 text-4xl font-bold'>
        Whether we match collectors with rare collectibles or plan for future gains by holding sought after assets until the right time.
        </div>
      </div>
    </div>
  )
}

export default Partners