import { FiSend } from 'react-icons/fi'
import { FaAngleDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import SelectMenu from './../SelectMenu/SelectMenu'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import AddedFilter from './AddedFitler'
import { useDispatch, useSelector } from 'react-redux';
import { setRadius, fetchCars, setNewUsed, setBodyTypesCars, setRate, setYears, paginatedValue, setModelType } from '../../Redux/Slices/HomePageSlice/HomePageSlice';


function SideFilterBar({ props, setAllCars, setAllCount }) {

    const { newUsed, modelType, model, cars, count, bodyType, exteriorColor, interiorColor, driveTrain, transmission, fuelType, features } = useSelector((state) => state.HomePageSlice)
    const dispatch = useDispatch()


    const [allData, setAllData] = useState({
        bodyType: props.bodyType,
        make: props.make,
        model: props.model,
        exteriorColor: props.exteriorColor,
        interiorColor: props.interiorColor,
        driveTrain: props.dTrain,
        transmission: props.transmission,
        fuelType: props.fuelType,
        features: props.features
    })

    const [miles, setMiles] = useState("100")
    const [year, setYear] = useState([1990, 2022])
    const [more, setMore] = useState(false)
    const [rate, setRates] = useState([10000, 30000])
    const [milage, setMilage] = useState("60")


    useEffect(() => {
        count ? setAllCount(count) : ""
        if (cars.length > 0) {
            setAllCars(cars);
            setAllData({
                bodyType: bodyType,
                make: props.make,
                model: model,
                exteriorColor: exteriorColor,
                interiorColor: interiorColor,
                driveTrain: driveTrain,
                transmission: transmission,
                fuelType: fuelType,
                features: features
            })
        }

    }, [cars, count])

    const interiorFet = allData && Object.entries(allData.features)[0] && Object.entries(allData.features)[0][1]
    const techFet = allData && Object.entries(allData.features)[1] && Object.entries(allData.features)[1][1]
    const safFet = allData && Object.entries(allData.features)[2] && Object.entries(allData.features)[2][1]
    const extFet = allData && Object.entries(allData.features)[3] && Object.entries(allData.features)[3][1]
    const others = allData && Object.entries(allData.features)[4] && Object.entries(allData.features)[4][1]


    function handleCarType(e) {
        let arr = newUsed.join(',').split(',');
        e.target.checked ? arr.push(e.target.value) : arr.splice(arr.indexOf(e.target.value), 1)
        dispatch(setNewUsed(arr))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
        setAllCars([])
        setAllCount("")

    }

    function handleRadius(value) {
        dispatch(setRadius(value))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
        setAllCars([])
        setAllCount("")
    }

    function handlePrice(value) {
        dispatch(setRate(value))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
        setAllCars([])
        setAllCount("")

    }

    function handleBodyTypeCars(e) {
        let arr2 = newUsed.join(',').split(',');
        e.target.checked ? arr2.push(e.target.value) : arr2.splice(arr2.indexOf(e.target.value), 1)
        dispatch(setBodyTypesCars(arr2))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
        setAllCars([])
        setAllCount("")

    }

    function handleModelTypeCars(e) {
        let arr2 = modelType.join(',').split(',');
        e.target.checked ? arr2.push(e.target.value) : arr2.splice(arr2.indexOf(e.target.value), 1)
        dispatch(setModelType(arr2))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
        setAllCars([])
        setAllCount("")
    }

    function handleYear(value) {
        dispatch(setYears(value))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
        setAllCars([])
        setAllCount("")
    }


    function Year(value) {
        setYear(value)
    }
    function Miles(value) {
        setMiles(value)
    }
    function price(value) {
        setRates(value)
    }
    function Avg(value) {
        setMilage(value)
    }


    const rating = {
        "⭐⭐⭐⭐⭐ only": 5,
        "⭐⭐⭐⭐ and above": 4,
        "⭐⭐⭐ and above": 3,
        "⭐⭐ and above": 2,
        "⭐ and above": 1,
    }



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
                                <input value="New+Car" onChange={(e) => handleCarType(e)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">New</label>
                            </div>
                            <div className="flex justify-center items-center gap-[10px]">
                                <input value="Used+Car" onChange={(e) => handleCarType(e)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black" type="checkbox" name="Used" id="" />
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
                        <div className='relative group'>
                            <div>
                                <Slider
                                    defaultValue={100}
                                    onAfterChange={handleRadius}
                                    onChange={Miles}
                                    trackStyle={{ background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)', height: "6px" }}
                                    handleStyle={{
                                        opacity: "1",
                                        borderColor: ' #FFFFFF',
                                        width: 20,
                                        height: 20,
                                        marginTop: -8,
                                        background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)',
                                        boxShadow: "0px 3px 7px -1px rgba(254, 110, 6, 0.46)"
                                    }}
                                    railStyle={{ backgroundColor: ' #EBEBF0', height: 6 }}
                                    min={20} max={500} />
                            </div>
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
                            <SelectMenu Make={allData.make} setAllCars={setAllCars} setAllCount={setAllCount}/>
                        </div>
                    </div>
                    <div className='flex max-h-[10000px]  mt-[16px] flex-col gap-[14px]'>
                        <div>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">MODEL</h4>
                        </div>
                        <div className={`pl-[8px]] flex flex-col max-h-full item-start  ${more ? "h-full" : "h-[165px]"}  overflow-hidden gap-[16px]`}>
                            {allData.model && Object.keys(allData.model).map((data, index) => {
                                return <>
                                    <div className="flex  items-center gap-[10px]" key={index}>
                                        <input value={data} checked={modelType.includes(data)} onChange={(event) => handleModelTypeCars(event)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                        <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{data} ({Object.values(allData.model)[index]})</label>
                                    </div>
                                </>
                            })}
                        </div>
                        {Object.keys(allData.model).length > 0 ? <div className='flex cursor-pointer items-center' onClick={() => setMore(!more)}>
                            <h4 className='font-[500]  text-[#FF8800] text-[14px] leading-[20px]'>Show more</h4>
                            <span className=''><FaAngleDown className='text-[#FF8800]' /></span>
                        </div> : <p>No Model To Display</p>}
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className='flex max-h-[1000px] flex-col gap-[14px]'>
                        <div>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">BODY TYPE</h4>
                        </div>
                        <div className='flex flex-col item-start gap-[16px]'>
                            {Object.keys(allData.bodyType).map((res, index) => {
                                return <>
                                    <div className="flex  items-center gap-[10px]" key={index}>
                                        <input value={res} onChange={(event) => handleBodyTypeCars(event)} className="w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#8F90A6] accent-black " type="checkbox" name="New" id="" />
                                        <label className="font-[500] text-[14px] text-[#28293D] leading-[20px]" htmlFor="New">{res} ({Object.values(allData.bodyType)[index]})</label>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className=' flex flex-col gap-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">PRICE</h4>
                            <h1 className='text-[#28293D] text-[16px] font-[600] leading-[24px]'>${rate[0]} - ${rate[1]}</h1>
                        </div>
                        <div>
                            <Slider
                                range
                                min={0} max={100000}
                                defaultValue={[0, 100000]}
                                onChange={price}
                                onAfterChange={handlePrice}
                                trackStyle={{ background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)', height: "6px" }}
                                handleStyle={{
                                    opacity: "1",
                                    borderColor: ' #FFFFFF',
                                    width: 20,
                                    height: 20,
                                    marginTop: -8,
                                    background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)',
                                    boxShadow: "0px 3px 7px -1px rgba(254, 110, 6, 0.46)"
                                }}
                                railStyle={{ backgroundColor: ' #EBEBF0', height: 6 }}
                            />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>$0</p>
                            </div>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>$100,000</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className=' flex flex-col gap-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">MAKE YEAR</h4>
                            <h1 className='text-[#28293D] text-[16px] font-[600] leading-[24px]'>{year[0]} - {year[1]}</h1>
                        </div>
                        <div>
                            <Slider
                                range
                                min={1990} max={2022}
                                defaultValue={[1990, 2022]}
                                onChange={Year}
                                onAfterChange={handleYear}
                                trackStyle={{ background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)', height: "6px" }}
                                railStyle={{ backgroundColor: ' #EBEBF0', height: 6 }}
                                handleStyle={{
                                    opacity: "1",
                                    borderColor: ' #FFFFFF',
                                    width: 20,
                                    height: 20,
                                    marginTop: -8,
                                    background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)',
                                    boxShadow: "0px 3px 7px -1px rgba(254, 110, 6, 0.46)"
                                }}
                            />

                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>1990</p>
                            </div>
                            <div>
                                <p className='font-[500] text-[#28293D] text-[12px] leading-[16px]'>2022</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-[280px] h-[1px] mt-[18px] mb-[16px] rounded-[10px] bg-[#E4E4EB]" />
                    <div className=' flex flex-col gap-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className="font-[600] text-[12px] text-[#8F90A6] leading-[16px]">MILEAGE</h4>
                            <h1 className='text-[#28293D] text-[16px] font-[600] leading-[24px]'>{milage}</h1>
                        </div>
                        <div>
                            <Slider
                                defaultValue={30}
                                onChange={Avg}
                                trackStyle={{ background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)', height: "6px" }}
                                handleStyle={{
                                    opacity: "1",
                                    borderColor: ' #FFFFFF',
                                    width: 20,
                                    height: 20,
                                    marginTop: -8,
                                    background: 'linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)',
                                    boxShadow: "0px 3px 7px -1px rgba(254, 110, 6, 0.46)"
                                }}
                                railStyle={{ backgroundColor: ' #EBEBF0', height: 6 }}
                                min={0} max={100} />
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
                    <AddedFilter title={"PERFORMANCE"} data={transmission} data2={driveTrain} data3={fuelType} head={"TRANSMISSION"} head2={"DRIVE TRAIN"} head3={"FUEL TYPE"} />
                </div>
                <div>
                    <AddedFilter title={"FEATURES"} data={interiorFet} data2={techFet} data3={safFet} data4={extFet} data5={others} head={"INTERIOR FEATURES"} head2={"TECHNOLOGY FEATURES"} head3={"SAFETY FEATURES"} head4={"EXTERIOR FEATURES"} head5={"OTHERS"} />
                </div>
                <div>
                    <AddedFilter title={"RATING"} data={rating} />
                </div>
            </section>
        </>
    )
}

export default SideFilterBar
