import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import CarFeatures from '../CarFeatures/CarFeatures';
import CarSpecs from '../CarSpecs/CarSpecs';
import CustomSlickSlider from '../CustomSlickSlider/CustomSlickSlider.js';

function CarDetails({cars}) {
    const router = useRouter()
    return (
        <>
            <section className='mx-auto max-w-[1440px]'>
                <div className='bg-white flex justify-between whitespace-nowrap  pt-[36px] pb-[24px] items-center px-[60px]'>
                    <div className='flex items-start gap-[16px]'>
                        <div>
                            {/* <Link href="/" > */}
                                <Image
                                    src="/BackBtn.png"
                                    width={60}
                                    height={60}
                                    alt=""
                                    onClick={()=>router.push("/")}
                                />
                            {/* </Link> */}
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <div>
                                <h1 className='text-[#28293D] text-[32px] font-[700] leading-[44px]'>{cars.year} {cars.make} {cars.model}</h1>
                            </div>
                            <div className='flex flex-col'>
                                <ul className='flex gap-[10px]  '>
                                    <li className='font-[400] text-[12px] text-[#8F90A6]  leading-[16px]'>{cars.dealership}</li>
                                    <li className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'>•  {cars.milage} Milage</li>
                                    <li className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'>•  {cars.exterior_color}</li>
                                </ul>
                                <div>
                                    <p className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'>{cars.city} , {cars.state}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[24px]'>
                        <div className='flex justify-center items-center gap-[8px]'>
                            <div>
                                <p className='font-[600] text-[#28293D] text-[28px] leading-[38px]'>${cars.price.toLocaleString('en-US')}</p>
                            </div>
                            <div className='rounded-full bg-[#8F90A6] flex justify-center items-center w-[16px] h-[16px]'>
                                <p className='italic text-xs text-white'>i</p>
                            </div>
                        </div>
                        <div>
                            <button style={{ background: "linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)" }} className='w-[137px] h-[36px] rounded-[10px] shadow-btnShadow px-[16px] py-[6px] text-[#FFFFFF] flex justify-center items-center gap-[2px] drop-shadow-textShadow'>Invite Dealer <Image src="/Arrow.png" width={15} height={24} alt="" /> </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[16px] px-[135px] bg-[#FFF8E6] py-[24px] w-full justify-start">
                    <div className="flex gap-[5px]">
                        <Image src='/star.png' width={20} height={1} alt="" />
                        <p className="font-[600] text-[12px] text-[#05A660] leading-[20px]">SPECIAL OFFERS</p>
                    </div>
                    <ul className="flex gap-[16px]">
                        <li className='font-[400] text-[14px] text-[#28293D] leading-[24px]'>• 100% credit approval guaranteed</li>
                        <li className='font-[400] text-[14px] text-[#28293D] leading-[24px]'>• Complimentary 101pt safety check</li>
                    </ul>
                </div>
                <div>
                    <CustomSlickSlider cars={cars} />
                </div>
                <div className='px-[60px] py-[64px]'>
                    <CarSpecs cars={cars} />
                </div>
                <div className='px-[60px]'>
                    <CarFeatures cars={cars} />
                </div>
            </section>
        </>
    )
}

export default CarDetails
