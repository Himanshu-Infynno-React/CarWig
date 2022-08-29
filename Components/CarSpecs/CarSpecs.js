import Image from 'next/image'
import React from 'react'

function CarSpecs({cars}) {
    return (
        <section className='p-[36px]  bg-white shadow-specsShadow rounded-[10px]'>
            <div className='flex flex-col max-h-[388px]  gap-[36px]'>
                <div>
                    <h1 className='font-[700] text-[32px] text-[#28293D] leading-[44px]'>Car Details</h1>
                </div>
                <div className='flex flex-col flex-wrap gap-[24px] max-h-[284px]'>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/carType.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>CAR TYPE</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.car_type}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/mileage.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>MILEAGE</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.milage.toLocaleString('en-US')}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/carType.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>TRIM</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.trim}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/engine.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>ENGINE</h3>
                            <p className='font-[500] max-w-[314px] text-[#28293D] text-[14px] leading-[20px]'>{cars.engine_description}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/year.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>YEAR</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.year}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/paint.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>EXTERIOR COLOR</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.exterior_color}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/transmission.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>TRANSMISSION</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.transmission}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/vin.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>VIN</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.vin}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/fuelType.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>FUEL TYPE</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.fuel_type}</p>
                        </div>
                    </div>
                    <div className='flex gap-[16px]'>
                        <div>
                            <Image
                                src='/driveTrain.png'
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className='font-[600] text-[#8F90A6] text-[12px] leading-[16px]'>DRIVE TRAIN</h3>
                            <p className='font-[500] text-[#28293D] text-[14px] leading-[20px]'>{cars.drivetrain}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CarSpecs
