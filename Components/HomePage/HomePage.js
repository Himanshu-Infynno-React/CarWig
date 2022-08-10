import Image from 'next/image'
import SideFilterBar from '../SideFilterBar/SideFilterBar'
import CarsCard from '../CarsCard/CarsCard'

function HomePage() {
    return (
        <>
            <section className='mt-[36px] px-[60px] w-full h-full flex justify-center items-center'>
                <div className="main flex w-full justify-start items-center ">
                    <div className='flex flex-col gap-[36px]'>
                        <div className="upper flex justify-start items-center">
                            <div className="flex flex-col gap-[8px]">
                                <p className="text-[12px] text-[#8F90A6] font-[600] leading-[16px]">USED CARS FOR SALE</p>
                                <p className="text-[32px] text-[#28293D] font-[700] leading-[44px]">Showing 1,023 Cars</p>
                            </div>
                        </div>
                        <div className="lower flex gap-[24px]">
                            <div className="sideBar ">
                                <SideFilterBar />
                            </div>
                            <div className="CaRd flex flex-col gap-[24px]">
                                <CarsCard />
                                <CarsCard />
                                <CarsCard />
                                <CarsCard />
                                <CarsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
