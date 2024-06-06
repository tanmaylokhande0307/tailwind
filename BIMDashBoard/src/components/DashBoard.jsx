import { PieChart } from '@mui/x-charts'
import React from 'react'

const DashBoard = () => {
    return (
        <div className='flex flex-col py-12 px-10'>
            <h2>DashBoard</h2>
            <div className='flex space-x-8'>
                <div className='w-[30rem] h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5 text-gray-600'>
                    <span>JobName</span>
                    <span>Precast Wall</span>
                </div>
                <div className='w-[30rem] h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5 text-gray-600'>
                    <span>JobName</span>
                    <span>Precast Wall</span>
                </div>

            </div>

            <div className='flex space-x-8 mt-5'>
                <h2>Estimation</h2>
                <PieChart   
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />

            </div>

            <div className='flex space-x-8'>
                <div className='w-[30rem] h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5 text-gray-600'>
                    <span>Total hours</span>
                    <span>Precast Wall</span>
                </div>
                <div className='w-[30rem] h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5 text-gray-600'>
                    <span>JobName</span>
                    <span>Precast Wall</span>
                </div>

            </div>

        </div>
    )
}

export default DashBoard