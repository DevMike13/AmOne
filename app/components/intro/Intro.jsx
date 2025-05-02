'use client';

import React, { useState } from 'react'
import Header from '../header/Header';
import { StarIcon } from '@heroicons/react/24/solid';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Intro = () => {
  const options = [2500, 5000, 7500, 10000, 15000, 20000, 25000, 50000];
  const [selectedAmount, setSelectedAmount] = useState();

  return (
    <div className='relative w-full h-auto max-h-auto bg-[#19339A]'>
        <Header />
        <div className="p-6 w-full md:max-w-[600px] m-auto pt-5 flex flex-col justify-center items-center gap-7 lg:gap-5">
            <h6 className='text-base text-white font-semibold'>Rates from <span className='text-xl font-bold text-blue-200'>6.99%</span> APR</h6>
            <h1 className="text-2xl md:text-4xl font-bold text-center text-white">Make Money Moves with a Personal Loan</h1>
            <h6 className='text-xl text-white font-semibold'>How much would you like to borrow?</h6>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
             {options.map((amount) => (
                <div key={amount}>
                  <input
                    type="radio"
                    id={`amount-${amount}`}
                    name="amount"
                    value={amount}
                    className="hidden peer"
                    checked={selectedAmount === amount}
                    onChange={() => setSelectedAmount(amount)}
                  />
                  <label
                    htmlFor={`amount-${amount}`}
                    className="w-full block text-center cursor-pointer rounded-lg px-4 py-2 text-sm bg-gray-200 text-gray-700 peer-checked:bg-blue-600 peer-checked:text-white transition"
                  >
                    ${amount.toLocaleString()}
                  </label>
                </div>
              ))}
            </div>
            <a
                href="https://www.rzmef8trk.com/5TZ63ZQ/9PXQ7XN/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white text-center hover:bg-[#f60707] font-bold w-[80%] bg-[#fa892b] py-2 capitalized rounded-full shadow-lg hover:shadow-none"
            >
              Explore Offers
            </a>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-2'>
                <img 
                  src="images/check.svg" 
                  alt="Logo" 
                  width={16} 
                  height={50} 
                />
                <p className='text-sm text-blue-200 font-semibold'>Secure the money you need without worry</p>
              </div>
              <div className='flex gap-2'>
                <img 
                  src="images/check.svg" 
                  alt="Logo" 
                  width={16} 
                  height={50} 
                />
                <p className='text-sm text-blue-200 font-semibold'>Get up to $100,000 from trusted lenders</p>
              </div>
              <div className='flex gap-2'>
                <img 
                  src="images/check.svg" 
                  alt="Logo" 
                  width={16} 
                  height={50} 
                />
                <p className='text-sm text-blue-200 font-semibold'>Find a match and get funded quickly</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
              <div className='flex gap-1 h-[25px] max-h-[25px]'>
                <div className='bg-[#01b67c] p-0.5 rounded-xs flex justify-content items-center'>
                  <StarIcon className="w-5 h-5 text-white" />
                </div>
                <div className='bg-[#01b67c] p-0.5 rounded-xs flex justify-content items-center'>
                  <StarIcon className="w-5 h-5 text-white" />
                </div>
                <div className='bg-[#01b67c] p-0.5 rounded-xs flex justify-content items-center'>
                  <StarIcon className="w-5 h-5 text-white" />
                </div>
                <div className='bg-[#01b67c] p-0.5 rounded-xs flex justify-content items-center'>
                  <StarIcon className="w-5 h-5 text-white" />
                </div>
                <div className='relative bg-gray-400 p-0.5 rounded-xs flex justify-content items-center overflow-hidden'>
                  <div className='h-full w-[70%] absolute left-0 top-0 bg-[#01b67c]'></div>
                  <StarIcon className="w-5 h-5 text-white relative" />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
                <p className='text-white font-semibold'>4.7 / Excellent <span className='text-xs font-thin italic'>from 835 reviews on</span></p>
                <img 
                  src="images/trust-pilot.svg" 
                  alt="Logo" 
                  width={90} 
                  height={50} 
                />
              </div>
            </div>
        </div>
        <div className='bg-[#0f2767] py-8 border-b-4 border-[#fa892b] hidden lg:block'>
          <img 
            src="images/feature.svg" 
            alt="Logo" 
          />
        </div>
        <div className="w-full h-auto bg-white flex justify-center items-center flex-col relative">
          
          <div className='w-full h-auto py-5 flex justify-center items-center lg:mt-10 bg-[#0f2767] lg:bg-white'>
            <h1 className='font-bold text-xl lg:text-4xl  text-center text-white lg:text-[#102668]'>Land a Personal Loan in 4 Simple Steps</h1>
          </div>
          <div className='hidden lg:flex w-[80%] max-w-[80%] justify-around items-stretch gap-4 mb-10'>
            <div className="bg-white w-[260px] h-[320px] p-6 flex flex-col gap-3 items-center justify-center text-lg font-semibold text-gray-700">
              <img 
                src="images/Debt-1.svg" 
                alt="Logo" 
              />
              <div className='flex justify-center items-center gap-5'>
                <h1 className='text-6xl text-[#102668] font-bold'>1.</h1>
                <p>Fill out our <span className='text-[#102668] font-bold'>quick form</span></p>
              </div>
            </div>
            <div className="bg-white w-[260px] h-[320px] p-6 flex flex-col gap-3 items-center justify-center text-lg font-semibold text-gray-700">
              <img 
                src="images/Debt-2.svg" 
                alt="Logo" 
              />
              <div className='flex justify-center items-center gap-5'>
                <h1 className='text-6xl text-[#102668] font-bold'>2.</h1>
                <p>Get matched to <span className='text-[#102668] font-bold'>top lenders</span> in minutes</p>
              </div>
            </div>
            <div className="bg-white w-[260px] h-[320px] p-6 flex flex-col gap-3 items-center justify-center text-lg font-semibold text-gray-700">
              <img 
                src="images/Debt-3.svg" 
                alt="Logo" 
              />
              <div className='flex justify-center items-center gap-5'>
                <h1 className='text-6xl text-[#102668] font-bold'>3.</h1>
                <p>Compare <span className='text-[#102668] font-bold'>competitive offers</span> to find the right fit</p>
              </div>
            </div>
            <div className="bg-white w-[260px] h-[320px] p-6 flex flex-col gap-3 items-center justify-center text-lg font-semibold text-gray-700">
              <img 
                src="images/Debt-4.svg" 
                alt="Logo" 
              />
              <div className='flex justify-center items-center gap-5'>
                <h1 className='text-6xl text-[#102668] font-bold'>4.</h1>
                <p>Let our <span className='text-[#102668] font-bold'>experts</span> walk you through the final steps</p>
              </div>
            </div>
          </div>
          
          <Carousel className="w-full max-w-[70%] relative">
            <CarouselContent opts={{align: "start",}} className="-ml-2 md:-ml-4 mx-auto w-[90%] my-5 gap-2 lg:hidden">
              <CarouselItem
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="bg-white p-6 h-full flex flex-col gap-3 items-center justify-center text-lg font-semibold text-gray-700">
                    <img 
                      src="images/Debt-1.svg" 
                      alt="Logo" 
                    />
                    <div className='flex justify-center items-center gap-5'>
                      <h1 className='text-6xl text-[#102668] font-bold'>1.</h1>
                      <p>Fill out our <span className='text-[#102668] font-bold'>quick form</span></p>
                    </div>
                  </div>
              </CarouselItem>
              <CarouselItem
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="bg-white p-6 h-full flex flex-col gap-3 items-center justify-center text-lg font-semibold text-gray-700">
                    <img 
                      src="images/Debt-2.svg" 
                      alt="Logo" 
                    />
                    <div className='flex justify-center items-center gap-5'>
                      <h1 className='text-6xl text-[#102668] font-bold'>2.</h1>
                      <p>Get matched to <span className='text-[#102668] font-bold'>top lenders</span> in minutes</p>
                    </div>
                  </div>
              </CarouselItem>
              <CarouselItem
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="bg-white p-6 h-full flex flex-col gap-3 items-center justify-center text-lg font-semibold text-gray-700">
                    <img 
                      src="images/Debt-3.svg" 
                      alt="Logo" 
                    />
                    <div className='flex justify-center items-center gap-5'>
                      <h1 className='text-6xl text-[#102668] font-bold'>3.</h1>
                      <p>Compare <span className='text-[#102668] font-bold'>competitive offers</span> to find the right fit</p>
                    </div>
                  </div>
              </CarouselItem>
              <CarouselItem
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="bg-white p-6 h-full flex flex-col gap-3 items-center justify-center text-lg font-semibold text-gray-700">
                    <img 
                      src="images/Debt-3.svg" 
                      alt="Logo" 
                    />
                    <div className='flex justify-center items-center gap-5'>
                      <h1 className='text-6xl text-[#102668] font-bold'>4.</h1>
                      <p>Let our <span className='text-[#102668] font-bold'>experts</span> walk you through the final steps</p>
                    </div>
                  </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 lg:hidden" />
            <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 lg:hidden" />
          </Carousel>
        </div>
    </div>
  )
}

export default Intro