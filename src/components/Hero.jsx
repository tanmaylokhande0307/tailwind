import React from 'react'
import { Discount } from "../assets"

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col sm:py-16 py-6'>
      <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={Discount} className='w-[32px] h-[32px]' alt="" />
          <p className='text-dimWhite'>
            <span className='text-white'>20%</span> Discount For{" "}
            <span className='text-white'>1 Month</span> Account
          </p>

        </div>
      </div>
    </section>
  )
}

export default Hero