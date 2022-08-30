import Image from 'next/image'
import { useRouter } from 'next/router'
import MyModal from '../AuthModel/AuthModel';


function CarsCard({ cars }) {
    const router = useRouter();

    return (
        <>
            {
                <section className=' whitespace-nowrap cursor-pointer' onClick={() => router.push(`/${cars.vin}`)}>
                        <div className="rightBar rounded-[10px] overflow-hidden shadow-cardShadow bg-white h-[330px] w-[890px] flex flex-col">
                            <div className='flex gap-[24px]'>
                                <div className='carImage w-[360px] h-[254px]'>
                                    <Image
                                        src={cars.photos ? cars.photos[0] : "/defaultCar.png"}
                                        width={360}
                                        height={277}
                                        alt=""
                                    />
                                </div>
                                <div className='flex flex-col py-[24px] pr-[24px] gap-[96px]'>
                                    <div className='flex flex-col gap-[4px]'>
                                        <div className=''>
                                            <h1 className='font-[700] text-[20px] text-[#28293D] leading-[32px]'>{cars.year} {cars.make} {cars.model}</h1>
                                        </div>
                                        <div className='flex flex-col gap-[4px]'>
                                            <ul className='flex gap-[10px]  '>
                                                <li className='font-[400] text-[12px] text-[#8F90A6]  leading-[16px]'>{cars.dealership}</li>
                                                <li className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'>•  {cars.milage} Milage</li>
                                                <li className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'>•  {cars.exterior_color}</li>
                                            </ul>
                                            <p className='font-[400] text-[12px] text-[#8F90A6] leading-[16px]'>{cars.city} , {cars.state}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-[250px]'>
                                        <div className='flex justify-center items-center gap-[8px]'>
                                            <div>
                                                <p className='font-[600] text-[#28293D] text-[28px] leading-[38px]'>${cars.price.toLocaleString('en-US')}</p>
                                            </div>
                                            <div className='rounded-full bg-[#8F90A6] flex justify-center items-center w-[16px] h-[16px]'>
                                                <p className='italic text-xs text-white'>i</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ background: "linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)" }} className='w-[137px] h-[36px] rounded-[10px] shadow-btnShadow px-[16px] py-[6px] text-[#FFFFFF] flex justify-center items-center gap-[2px] drop-shadow-textShadow' onClick={(event) => { event.stopPropagation()}}><MyModal /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-b-[10px] bg-[#FFF8E6] py-[16px] px-[24px] justify-start">
                                <div className="flex gap-[5px]">
                                    <Image src='/star.png' width={20} height={1} alt="" />
                                    <p className="font-[600] text-[12px] text-[#05A660] leading-[20px]">SPECIAL OFFERS</p>
                                </div>
                                <ul className="flex gap-[16px]">
                                    <li className='font-[400] text-[14px] text-[#28293D] leading-[24px]'>100% credit approval guaranteed</li>
                                    <li className='font-[400] text-[14px] text-[#28293D] leading-[24px]'>Complimentary 101pt safety check</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    
            }
        </>
    )
}

export default CarsCard
