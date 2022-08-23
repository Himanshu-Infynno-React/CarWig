import React from 'react'

function CarFeatures({ cars }) {

    const carArray = cars.features1.split(",")


    return (
        <>
            <section className='p-[36px] bg-white shadow-specsShadow rounded-[10px] '>
                <div className='flex flex-col h-auto gap-[36px]'>
                    <div>
                        <h1 className='font-[700] text-[32px] text-[#28293D] leading-[44px]'>Other Features</h1>
                    </div>
                    <div className='flex flex-wrap justify-between gap-8 h-auto'>
                        {carArray.map((data, index) => {
                            return <p key={index} className='font-[500] text-[#28293D] h-[20px] overflow-hidden text-[13px] leading-[20px] w-[360px]'>{data.replace(/[\[\]'"*]+/g, "")}</p>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CarFeatures
