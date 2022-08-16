import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

function AddedFilter({ title, data, data2, head , data3 , head2 , head3 ,data4 ,data5 ,head4,head5 }) {

    

    const [size, setSize] = useState(false)
    return (
        <>
            <section className='w-full border-t-[1px] px-[16px] py-[16px]   border-t-[#E4E4EB]' onClick={() => setSize(!size)}>
                <div>
                    <div className='w-full flex justify-between items-center' >
                        <h4 className='font-[600] text-[#28293D] text-[16px] leading-[24px]'>{title}</h4>
                        <span><FaAngleDown size={15} /></span>
                    </div>
                    <div className={`pl-[8px]] flex flex-col item-start max-h-full gap-[16px] ${size ? "h-auto pl-2 py-[16px]" : "h-0 "} overflow-hidden`}>
                        {data  && 
                        <>
                        <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">{head}</h4>
                        {Object.keys(data)?.map((data, index) => {
                            return <>
                                <div key={index} className="flex  items-center gap-[10px]">
                                    <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                    <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{data}</label>
                                </div>
                            </>
                        })}
                        </>
                    }
                        {data2 && head2 && 
                        <>
                        <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">{head2}</h4>
                        {Object.keys(data2)?.map((data, index) => {
                            return <>
                                <div key={index} className="flex  items-center gap-[10px]">
                                    <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                    <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{data}</label>
                                </div>
                            </>
                        })}
                        </>
                    }
                        {data3 && head3 && 
                        <>
                        <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">{head3}</h4>
                        {Object.keys(data3)?.map((data, index) => {
                            return <>
                                <div key={index} className="flex  items-center gap-[10px]">
                                    <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                    <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{data}</label>
                                </div>
                            </>
                        })}
                        </>
                    }
                        {data4 && head4 && 
                        <>
                        <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">{head4}</h4>
                        {Object.keys(data4)?.map((data, index) => {
                            return <>
                                <div key={index} className="flex  items-center gap-[10px]">
                                    <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                    <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{data}</label>
                                </div>
                            </>
                        })}
                        </>
                    }
                        {data5 && head5 && 
                        <>
                        <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">{head5}</h4>
                        {Object.keys(data5)?.map((data, index) => {
                            return <>
                                <div key={index} className="flex  items-center gap-[10px]">
                                    <input className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                    <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{data}</label>
                                </div>
                            </>
                        })}
                        </>
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddedFilter
