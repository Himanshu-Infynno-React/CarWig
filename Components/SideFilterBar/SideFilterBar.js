import Image from 'next/image'
import Arrow from './../../images/Arrow.png'
import { FiSend } from 'react-icons/fi'
import { FaAngleDown } from 'react-icons/fa'
import { useState } from 'react'
import SelectMenu from './../SelectMenu/SelectMenu'



function SideFilterBar() {

    const [miles, setMiles] = useState("100")
    const [options, setOptions] = useState("Select Make")

    return (
        <>
            <section className="max-h-[5000px]">
                <div className="w-[312px] flex flex-col h-full p-[16px] bg-white">
                    <h1 className="font-[700] text-[16px] text-[#28293D] leading-[24px]">Filter by</h1>
                    <div className="w-[30px] h-[2px] rounded-[10px] mt-[8px] mb-[24px]" style={{ background: " linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)" }}></div>
                    <div className="flex flex-col gap-[14px]">
                        <div>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">CAR TYPE</h4>
                        </div>
                        <div className="flex  items-center gap-[26px]">
                            <div className="flex justify-center items-center gap-[10px]">
                                <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">New</label>
                            </div>
                            <div className="flex justify-center items-center gap-[10px]">
                                <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black" type="checkbox" name="Used" id="" />
                                <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="Used">Used</label>
                            </div>
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className="flex flex-col gap-[8px]">
                        <div>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">YOUR ZIP</h4>
                        </div>
                        <div className="w-[280px] h-[48px] rounded-[10px] border-[1px] border-[#E4E4EB] flex justify-between items-center py-[14px] px-[16px]">
                            <div>
                                <input type="search" name="" className="h-[20px] outline-none text-[#28293D] text-[14px] leading-[20px] font-[500]" id="" />
                            </div>
                            <div>
                                <FiSend className='text-[#FF6B00]' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[20px] flex flex-col gap-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">SEARCH WITHIN</h4>
                            <h1 className='text-[#28293D] text-[16px] font-[600] leading-[24px]'>{miles} miles</h1>
                        </div>
                        <div>
                            {/* <input type="range" name="miles" className='rangeBar' min="20"  max="500" id="" /> */}
                            <input
                                className="slider"
                                value={miles}
                                // onLoad={(e) => {
                                // var value =
                                // ((e.target.value - e.target.min) /
                                // (e.target.max - e.target.min)) *
                                // 100
                                // this.style.background =
                                //     'linear-gradient(to right, #F2473A 0%, #F2473A ' +
                                //     value +
                                //     '%, #e0e0e0 ' +
                                //     value +
                                //     '%, #e0e0e0 100%)'
                                // }}
                                onChange={(e) => {
                                    e.target.oninput = function () {
                                        var value = e.target.value
                                        setMiles(value)
                                        var Miles = (
                                            (e.target.value - e.target.min) /
                                            (e.target.max - e.target.min)
                                        ) *
                                            100
                                        // this.style.background =
                                        //     'linear-gradient(to right, #F2473A 0%, #F2473A ' +
                                        //     Miles +
                                        //     '%, #e0e0e0 ' +
                                        //     Miles +
                                        //     '%, #e0e0e0 100%)'
                                    }
                                }}
                                type="range"
                                min="20"
                                max="500"
                            ></input>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>20 miles</p>
                            </div>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>500 miles</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className='flex flex-col gap-[8px]'>
                        <div>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">MAKE</h4>
                        </div>
                        <div>
                            
                            <SelectMenu />
                        </div>


                    </div>









                </div>
            </section>
        </>
    )
}

export default SideFilterBar
