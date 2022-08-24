import SideFilterBar from '../SideFilterBar/SideFilterBar'
import CarsCard from '../CarsCard/CarsCard'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars, paginatedValue } from '../../Redux/Slices/HomePageSlice/HomePageSlice';

function HomePage({count , data, make, model, bodyType, exteriorColor, interiorColor, transmission, driveTrain, fuelType, features }) {

    const dispatch = useDispatch()
    const {page} = useSelector((state) => state.HomePageSlice)

    function PaginationHandler(e){
        dispatch(paginatedValue(e.selected+1))
    }
    
    // useEffect(()=>{
    //     dispatch(fetchCars())
    // },[])

    // console.log(page);




    return (
        <>
            {/* {data && */}
            <section className='mt-[36px] px-[60px] w-full h-full flex justify-center items-center'>
                <div className="main flex w-full justify-start items-center ">
                    <div className='flex flex-col gap-[36px]'>
                        <div className="upper flex justify-start items-center">
                            <div className="flex flex-col gap-[8px]">
                                <p className="text-[12px] text-[#8F90A6] font-[600] leading-[16px]">USED CARS FOR SALE</p>
                                <p className="text-[32px] text-[#28293D] font-[700] leading-[44px]">Showing {count} Cars</p>
                            </div>
                        </div>
                        <div className="lower flex gap-[24px]">
                            <div className="sideBar ">
                                <SideFilterBar make={make} model={model} bodyType={bodyType} exteriorColor={exteriorColor} interiorColor={interiorColor} transmission={transmission} fuelType={fuelType} driveTrain={driveTrain} features={features} />
                            </div>
                            <div className="CaRd flex flex-col gap-[24px]">
                                {data?.map((cars) => {
                                    return <CarsCard key={cars.car_id} cars={cars} />
                                })}
                            </div>
                        </div>
                        <div className='py-[64px] max-w-[890px] ml-auto'>
                            <div>
                                <ReactPaginate
                                    className='pagination-box'
                                    breakLabel="..."
                                    nextLabel=">"
                                    nextClassName='pagination-btn page-nav page-next'
                                    previousClassName='pagination-btn page-nav page-prev'
                                    pageClassName='pagination-btn page-num'
                                    activeClassName='pagination-btn page-num page-active'
                                    breakClassName='pagination-btn'
                                    onPageChange={PaginationHandler}
                                    pageRangeDisplayed={5}
                                    pageCount={Math.ceil(count/20)}
                                    previousLabel="<"
                                    marginPagesDisplayed={1}
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                            <hr className='w-full border-[1px] border-[#E4E4EB] mt-[64px] mb-[36px]' />
                            <div className='flex flex-col gap-[12px]'>
                                <div>
                                    <h1 className='font-[700] text-[#28293D] text-[28px] leading-[38px] text-center'>Why Autodigg?</h1>
                                </div>
                                <div>
                                    <p className='font-[600]  text-[#8F90A6] text-[14px] leading-[20px] text-center'>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* } */}
        </>
    )
}

export default HomePage
