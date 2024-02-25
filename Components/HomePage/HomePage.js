import SideFilterBar from "../SideFilterBar/SideFilterBar";
import CarsCard from "../CarsCard/CarsCard";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCars,
  paginatedValue,
} from "../../Redux/Slices/HomePageSlice/HomePageSlice";
import LoaderCarCard from "../LoaderPage/LoaderCarCard";
import Image from "next/image";
import { useEffect, useState } from "react";

function HomePage({ props }) {
  const dispatch = useDispatch();
  const { cars, count, loading, message } = useSelector((state) => ({
    cars: state.HomePageSlice.cars,
    count: state.HomePageSlice.count,
    loading: state.HomePageSlice.loading,
    message: state.HomePageSlice.message,
  }));
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [allCars, setAllCars] = useState(props.cars);
  const [allCount, setAllCount] = useState(props.count);

  useEffect(() => {
    cars.length > 0 ? setAllCars(cars) : "";
    count ? setAllCount(count) : "";
  }, [cars, count]);

  function PaginationHandler(e) {
    dispatch(paginatedValue(e.selected + 1));
    dispatch(fetchCars());
    setAllCars([]);
  }

  return (
    <>
      <section className="mt-[36px] px-[60px] w-full h-full  flex justify-center items-center">
        <div className="main flex w-full justify-start items-center ">
          <div className="flex flex-col gap-[36px]">
            <div className="upper flex justify-start items-center">
              <div className="flex flex-col gap-[8px]">
                <p className="text-[12px] text-[#8F90A6] font-[600] leading-[16px]">
                  USED CARS FOR SALE
                </p>
                <p className="text-[32px] text-[#28293D] font-[700] leading-[44px]">
                  Showing {allCount} Cars
                </p>
              </div>
            </div>
            <div className="lower flex gap-[24px]">
              <div className="sideBar ">
                <SideFilterBar
                  props={props}
                  setAllCars={setAllCars}
                  setAllCount={setAllCount}
                />
              </div>
              <div className="CaRd flex flex-col gap-[24px]">
                {allCars?.length > 0
                  ? allCars.map((cars) => {
                      return <CarsCard key={cars.car_id} cars={cars} />;
                    })
                  : message.length == 0 &&
                    array.map((k, index) => {
                      return <LoaderCarCard key={index} />;
                    })}
                {message.length > 0 ? (
                  <div className="rightBar rounded-[10px] overflow-hidden shadow-cardShadow bg-white h-auto w-[890px] flex flex-col items-center py-[50px] gap-[20px]">
                    <div>
                      <Image
                        src="/noCars.png"
                        width={312}
                        height={312}
                        alt=""
                      />
                    </div>{" "}
                    <div className="flex items-center flex-col gap-[10px]">
                      <h1 className="font-[700] text-[20px] text-[rgb(40,41,61)] leading-normal">
                        No cars found to match your search
                      </h1>
                      <p className="font-[400] text-[16px] text-[rgb(143,144,166)] leading-normal">
                        Try searching for different cars or changing filters
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="py-[64px] max-w-[890px] ml-auto">
              <div>
                <ReactPaginate
                  className="pagination-box"
                  breakLabel="..."
                  nextLabel=">"
                  nextClassName="pagination-btn page-nav page-next"
                  previousClassName="pagination-btn page-nav page-prev"
                  pageClassName="pagination-btn page-num"
                  activeClassName="pagination-btn page-num page-active"
                  breakClassName="pagination-btn"
                  onPageChange={PaginationHandler}
                  pageRangeDisplayed={5}
                  pageCount={Math.ceil(allCount / 20)}
                  previousLabel="<"
                  marginPagesDisplayed={1}
                  renderOnZeroPageCount={null}
                />
              </div>
              <hr className="w-full border-[1px] border-[#E4E4EB] mt-[64px] mb-[36px]" />
              <div className="flex flex-col gap-[12px]">
                <div>
                  <h1 className="font-[700] text-[#28293D] text-[28px] leading-[38px] text-center">
                    Why Autodigg?
                  </h1>
                </div>
                <div>
                  <p className="font-[600]  text-[#8F90A6] text-[14px] leading-[20px] text-center">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
