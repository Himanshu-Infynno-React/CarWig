import Image from 'next/image'
import CarLogo from './../../images/image 2.png'
import Arrow from "./../../images/Arrow.png"

function CarsCard() {
    return (
        <>
            <section className=' whitespace-nowrap  '>
                <div className="rightBar rounded-[10px] overflow-hidden shadow-cardShadow bg-white h-[330px] w-[890px] flex flex-col">
                    <div className='flex gap-[24px]'>
                        <div className='carImage w-[360px] h-[254px]'>
                            {/* <img src="https://content.homenetiol.com/2002363/2164272/0x0/a9186eca884048a9ac2bd4a324b94dac.jpg" className="w-[325px] h-[254px]" /> */}
                            <Image 
                            src={"https://content.homenetiol.com/2002363/2164272/0x0/a9186eca884048a9ac2bd4a324b94dac.jpg"}
                            width={360}
                            height={277}
                            /> 
                        </div>
                        <div className='flex flex-col py-[24px] pr-[24px] gap-[96px]'>
                            <div className='flex flex-col gap-[4px]'>
                                <div className=''>
                                    <h1 className='font-[700] text-[20px] text-[#28293D] leading-[32px]'>2022 Ford F-250 Super Duty</h1>
                                </div>
                                <div className='flex flex-col gap-[4px]'>
                                    <div className='flex gap-[10px] '>
                                        <p className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'>Covert Buick GMC</p>
                                        <p className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'> • 3,518 Mileage</p>
                                        <p className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'> • Black</p>
                                    </div>
                                    <p className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'>Austin , Texas</p>
                                </div>
                            </div>
                            <div className='flex gap-[250px]'>
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <div>
                                        <p className='font-[600] text-[#28293D] text-[28px] leading-[38px]'>$87,698</p>
                                    </div>
                                    <div className='rounded-full bg-[#8F90A6] flex justify-center items-center w-[16px] h-[16px]'>
                                        <p className='italic text-xs text-white'>i</p>
                                    </div>
                                </div>
                                <div>
                                    <button style={{ background: "linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)" }} className='w-[137px] h-[36px] rounded-[10px] shadow-btnShadow px-[16px] py-[6px] text-[#FFFFFF] flex justify-center items-center gap-[2px] drop-shadow-textShadow'>Invite Dealer <Image src="/Arrow.png" width={15} height={24} /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-b-[10px] bg-[#FFF8E6] py-[16px] px-[24px] justify-start">
                        <div className="flex gap-[5px]">
                            <Image src='/star.png' width={20} height={1} />
                            <p className="font-[600] text-[12px] text-[#05A660] leading-[20px]">SPECIAL OFFERS</p>
                        </div>
                        <div className="flex gap-[16px]">
                            <li className='font-[400] text-[14px] text-[#28293D] leading-[24px]'>100% credit approval guaranteed</li>
                            <li className='font-[400] text-[14px] text-[#28293D] leading-[24px]'>Complimentary 101pt safety check</li>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CarsCard
