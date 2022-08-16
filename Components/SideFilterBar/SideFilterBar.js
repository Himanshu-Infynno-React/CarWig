import Image from 'next/image'
import Arrow from './../../images/Arrow.png'
import { FiSend } from 'react-icons/fi'
import { FaAngleDown } from 'react-icons/fa'
import { useState } from 'react'
import SelectMenu from './../SelectMenu/SelectMenu'
import RangeSlider from '../RangeSlider/RangeSlider'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import AddedFilter from './AddedFitler'


function SideFilterBar({ make, model , bodyType , exteriorColor ,interiorColor,transmission,driveTrain,fuelType,features }) {

    const [miles, setMiles] = useState("100")
    const [value, setValue] = useState("100")
    const [more, setMore] = useState(false)

    const featureDetails = Object.entries(features)
    const interiorFet = Object.entries(features)[0][1]
    const techFet = Object.entries(features)[1][1]
    const safFet = Object.entries(features)[2][1]
    const extFet = Object.entries(features)[3][1]
    const others = Object.entries(features)[4][1]
    
    
    const rating = {
        "⭐⭐⭐⭐⭐ only" : 3,
        "⭐⭐⭐⭐ and above" : 13,
        "⭐⭐⭐ and above" : 23,
        "⭐⭐ and above" : 33,
        "⭐ and above" :43,
    }
    console.log(Object.keys(rating))

    return (
        <>
            <section className="max-h-[50000px] bg-white">
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
                            <SelectMenu make={make} />
                        </div>
                    </div>
                    <div className='flex max-h-[10000px]  mt-[16px] flex-col gap-[14px]'>
                        <div>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">MODEL</h4>
                        </div>
                        <div className={`pl-[8px]] flex flex-col max-h-full item-start  ${more ? "h-full" : "h-[165px]"}  overflow-hidden gap-[16px]`}>
                            { Object.keys(model).map((data, index) => {
                                return <>
                                    <div className="flex  items-center gap-[10px]">
                                        <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                        <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{data} ({Object.values(model)[index]})</label>
                                    </div>
                                </>
                            })}

                        </div>
                        <div className='flex cursor-pointer items-center' onClick={() => setMore(!more)}>
                            <h4 className='font-[500]  text-[#FF8800] text-[14px] leading-[20px]'>Show more</h4>
                            <span className=''><FaAngleDown className='text-[#FF8800]' /></span>
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className='flex max-h-[1000px] flex-col gap-[14px]'>
                        <div>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">BODY TYPE</h4>
                        </div>
                        <div className='flex flex-col item-start gap-[16px]'>
                            {Object.keys(bodyType).map((res , index)=>{
                                return <>
                            <div className="flex  items-center gap-[10px]">
                                <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{res} ({Object.values(bodyType)[index]})</label>
                            </div>
                                </>
                            })}
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className=' flex flex-col gap-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">PRICE</h4>
                            <h1 className='text-[#28293D] text-[16px] font-[600] leading-[24px]'>$0 - $10,00</h1>
                        </div>
                        <div>
                            <RangeSlider />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>$0</p>
                            </div>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>$1,000</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className=' flex flex-col gap-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">MAKE YEAR</h4>
                            <h1 className='text-[#28293D] text-[16px] font-[600] leading-[24px]'>2000 - 2010</h1>
                        </div>
                        <div>
                            <RangeSlider />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>1990</p>
                            </div>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>2021</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className=' flex flex-col gap-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">MILEAGE</h4>
                            <h1 className='text-[#28293D] text-[16px] font-[600] leading-[24px]'>ANY</h1>
                        </div>
                        <div>
                            <Slider
                                value={100}
                                onBeforeChange={(e) => {
                                    setValue(e.target.value)
                                }}
                                trackStyle={{ backgroundColor: 'orange', height: 6 }}
                                handleStyle={{
                                    borderColor: ' #FFFFFF',
                                    width: 20,
                                    height: 20,
                                    // marginLeft: -14,
                                    marginTop: -8,
                                    backgroundColor: 'red',
                                    boxShadow: "0px 3px 7px -1px rgba(254, 110, 6, 0.46)"
                                }}
                                railStyle={{ backgroundColor: ' #EBEBF0', height: 6 }}
                                min={0} max={1000} />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>0</p>
                            </div>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>ANY</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[32px] w-[312px] '>
                    <AddedFilter title={"STYLE"} data={exteriorColor} data2={interiorColor} head={"EXTERIOR COLOR"} head2={"INTERIOR COLOR"} />
                </div>
                <div>
                    <AddedFilter title={"PERFORMANCE"} data={transmission} data2={driveTrain} data3={fuelType} head={"TRANSMISSION"} head2={"DRIVE TRAIN"} head3={"FUEL TYPE"}/>
                </div>
                <div>
                    <AddedFilter title={"FEATURES"} data={interiorFet} data2={techFet} data3={safFet} data4={extFet} data5={others} head={"INTERIOR FEATURES"} head2={"TECHNOLOGY FEATURES"} head3={"SAFETY FEATURES"} head4={"EXTERIOR FEATURES"} head5={"OTHERS"}  />
                </div>
                <div>
                    <AddedFilter title={"RATING"} data={rating} />
                </div>
            </section>
        </>
    )
}

export default SideFilterBar
