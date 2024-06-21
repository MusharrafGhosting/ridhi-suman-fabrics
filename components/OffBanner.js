import Image from 'next/image'
import React from 'react'


const OffBanner = () => {
    return (
        <div className='mt-5 p-2 '>
            <div className="mt-2 flex justify-around items-center">
                <div className='flex items-center '>
                    <Image src="/icon/ReadyMade.svg" width={50} height={45} />
                    <span className='mx-3'>READY MADE </span>
                </div>
                <div className=' h-16 w-[1px] bg-slate-400'></div>
                <div className='flex items-center '>
                    <Image src="/icon/BestEverDeals.svg" width={60} height={45} />
                    <span className='mx-3'>BEST EVER DEALS </span>
                </div>
                <div className=' h-16 w-[1px] bg-slate-400'></div>
                <div className='flex items-center '>
                    <Image src="/icon/MostTrusted.svg" width={60} height={45} />
                    <span className='mx-3'>MOST TRUSTED </span>
                </div>
            </div>
           
            <div className="mt-10 flex  items-center justify-center">
                <div className='flex items-center '>
                    <Image src="/icon/LovedByEveryone.svg" width={60} height={60} />
                    <span className='mx-3'>LOVED BY EVERYONE </span>
                </div>
                <div className=' h-16 w-[1px] bg-slate-400 mx-20'></div>
                <div className='flex items-center '>
                    <span className='mx-3'>EXPRESS SHIPPING </span>
                    <Image src="/icon/ExpressShipping.svg" width={60} height={45} />
                </div>   
            </div>
            
        </div>
    )
}

export default OffBanner