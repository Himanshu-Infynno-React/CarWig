import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setExtFeature, setOtherFet, setTransmissionType, setInteriorColorType, setInteriorFeatures, setExteriorColorType, setDriveTrainType, setFuelType, setTechFeatures, setSafFeature, fetchCars, paginatedValue } from './../../Redux/Slices/HomePageSlice/HomePageSlice'



function AddedFilter({ title, data, data2, head, data3, head2, head3, data4, data5, head4, head5 }) {


    const { cars, techFeatures, safFeature, otherFet, extFeatures, transmissionType, interiorColorType, exteriorColorType, interiorFeatures, driveTrainType, FuelType } = useSelector((state) => state.HomePageSlice)
    const dispatch = useDispatch()

    const [size, setSize] = useState(false)


    function handleChange1(event) {
        switch (head) {
            case "TRANSMISSION":
                let arr = event.target.checked ? [...transmissionType, event.target.value] : transmissionType.filter((k) => k !== event.target.value)
                dispatch(setTransmissionType(arr));
                dispatch(paginatedValue(1))
                dispatch(fetchCars())
                break;
            case "EXTERIOR COLOR":
                let arr2 = event.target.checked ? [...exteriorColorType, event.target.value] : exteriorColorType.filter((k) => k !== event.target.value)
                dispatch(setExteriorColorType(arr2));
                dispatch(paginatedValue(1))
                dispatch(fetchCars())
                break;
            case "INTERIOR FEATURES":
                let arr3 = event.target.checked ? [...interiorFeatures, event.target.value] : interiorFeatures.filter((k) => k !== event.target.value)
                dispatch(setInteriorFeatures(arr3));
                dispatch(paginatedValue(1))
                dispatch(fetchCars())
            default:
                break;
        }
    }
    function handleChange2(event) {
        let arr = event.target.checked ? [...driveTrainType, event.target.value] : driveTrainType.filter((k) => k !== event.target.value)
        let arr2 = event.target.checked ? [...interiorColorType, event.target.value] : interiorColorType.filter((k) => k !== event.target.value)
        let arr3 = event.target.checked ? [...techFeatures, event.target.value] : techFeatures.filter((k) => k !== event.target.value)

        switch (head2) {
            case "DRIVE TRAIN":
                dispatch(setDriveTrainType(arr));
                dispatch(paginatedValue(1))
                dispatch(fetchCars())
                break;
            case "INTERIOR COLOR":
                dispatch(setInteriorColorType(arr2));
                dispatch(paginatedValue(1))
                dispatch(fetchCars())
                break;
            case "TECHNOLOGY FEATURES":
                dispatch(setTechFeatures(arr3));
                dispatch(paginatedValue(1))
                dispatch(fetchCars())
            default:
                break;
        }
    }
    function handleChange3(event) {
        let arr = event.target.checked ? [...FuelType, event.target.value] : FuelType.filter((k) => k !== event.target.value)
        let arr3 = event.target.checked ? [...safFeature, event.target.value] : safFeature.filter((k) => k !== event.target.value)

        switch (head3) {
            case "FUEL TYPE":
                dispatch(setFuelType(arr));
                dispatch(paginatedValue(1))
                dispatch(fetchCars())
                break;
            case "SAFETY FEATURES":
                dispatch(setSafFeature(arr3));
                dispatch(paginatedValue(1))
                dispatch(fetchCars())
            default:
                break;
        }
    }
    function handleChange4(event) {
        let arr = event.target.checked ? [...extFeatures, event.target.value] : extFeatures.filter((k) => k !== event.target.value)
        dispatch(setExtFeature(arr))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
    }
    function handleChange5(event) {
        let arr = event.target.checked ? [...otherFet, event.target.value] : otherFet.filter((k) => k !== event.target.value)
        dispatch(setOtherFet(arr))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
    }


    return (
        <>
            <section className='w-full border-t-[1px] border-t-[#E4E4EB] px-[16px] py-[16px]' >
                <div>
                    <div className='w-full flex justify-between items-center cursor-pointer' onClick={() => setSize(!size)}>
                        <h4 className='font-[600] text-[#28293D] text-[16px] leading-[24px]'>{title}</h4>
                        <span><FaAngleDown size={15} /></span>
                    </div>
                    <div className={`pl-[8px]] flex flex-col item-start max-h-full gap-[16px] ${size ? "h-auto pl-2 py-[16px]" : "h-0 "} overflow-hidden`}>
                        {data &&
                            <>
                                <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">{head}</h4>
                                {Object.keys(data)?.map((data, index) => {
                                    return <>
                                        <div key={index} className="flex  items-center gap-[10px]">
                                            <input value={data} onChange={(event) => handleChange1(event)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
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
                                            <input value={data} onChange={(event) => handleChange2(event)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
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
                                            <input value={data} onChange={(event) => handleChange3(event)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
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
                                            <input value={data} onChange={(event) => handleChange4(event)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
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
                                            <input value={data} onChange={(event) => handleChange5(event)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
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
