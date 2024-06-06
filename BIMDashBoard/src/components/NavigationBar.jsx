import React, { useState } from 'react'
import image from "../assets/image.png"
import { BarChartBig, IndianRupee, LayoutDashboard, UserRound, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
    {
        name: "DashBoard",
        icon: <LayoutDashboard />
    },
    {
        name: "Analytics",
        icon: <BarChartBig />
    },
    {
        name: "Profile",
        icon: <UserRound />
    },
    {
        name: "Pricing",
        icon: <IndianRupee />
    }
]

const variants = {
    open: {width: "20%"},
    closed: {width: "5%"}
}

const NavigationBar = () => {

    const [activeNavLink, setActiveNavLink] = useState(0)
    const [isOpen, setIsOpen] = useState(true)

    return (
        <motion.div animate={ isOpen ? "open" : "closed" } variants={variants} transition={{ease: "easeInOut"}}
        className='px-[1.6rem] py-12 flex flex-col border-r-2 w-1/5 h-screen relative'>
            <div className='logo-div flex space-x-3 items-center'>
                <img src={image} className='h-[30px]' />
                <span className={`${isOpen ? "block": "hidden"}`}>BIM ESTIMATOR</span>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-center bg-[#800080] h-6 w-6 rounded-full text-white absolute -right-3 top-12'>
                <ChevronRight />
            </div>
            <div className='mt-10 flex flex-col space-y-8'>
                {navLinks.map(({ name, icon }, index) => {
                    return (
                        <div onClick={() => setActiveNavLink(index)} key={index} className={`flex space-x-3 items-center p-2 rounded-[5px] ${activeNavLink === index ? "  bg-[#800080] text-white font-semibold" : ""}}`}>
                            <span>{icon}</span>
                            <span className={`${isOpen ? "block": "hidden"}`}>{name}</span>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default NavigationBar