import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => {
    return (
        <div className='flex justify-center items-start w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer'>
            <div className='flex justify-center items-center bg-primary w-[100%] h-[100%] flex-col rounded-full'>
                <div className='flex justify-center items-center flex-row'>
                    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient">Started</span>
                </p>

            </div>
        </div>
    )
}

export default GetStarted