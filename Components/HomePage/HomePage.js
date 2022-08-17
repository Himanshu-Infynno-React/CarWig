import Image from 'next/image'
import SideFilterBar from '../SideFilterBar/SideFilterBar'
import CarsCard from '../CarsCard/CarsCard'
import Link from 'next/link'

function HomePage({ data , make ,model ,bodyType,exteriorColor,interiorColor,transmission,driveTrain,fuelType,features}) {


    return (
        <>
            <section className='mt-[36px] px-[60px] w-full h-full flex justify-center items-center'>
                <div className="main flex w-full justify-start items-center ">
                    <div className='flex flex-col gap-[36px]'>
                        <div className="upper flex justify-start items-center">
                            <div className="flex flex-col gap-[8px]">
                                <p className="text-[12px] text-[#8F90A6] font-[600] leading-[16px]">USED CARS FOR SALE</p>
                                <p className="text-[32px] text-[#28293D] font-[700] leading-[44px]">Showing {data.length} Cars</p>
                            </div>
                        </div>
                        <div className="lower flex gap-[24px]">
                            <div className="sideBar ">
                                <SideFilterBar make={make} model={model} bodyType={bodyType} exteriorColor={exteriorColor} interiorColor={interiorColor} transmission={transmission} fuelType={fuelType} driveTrain={driveTrain} features={features} />
                            </div>
                            <div className="CaRd flex flex-col gap-[24px]">
                                {data.map((cars) => {
                                    return <CarsCard key={cars.car_id} cars={cars} />
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
