import Image from 'next/image'


function Footer() {
    return (
        <>
            <footer className="flex mt-[100px] justify-center max-w-[100vw] items-center">
                <div className="">
                    <div className="pt-[64px] pb-[36px] w-[100%] gap-[253px] px-[60px] flex justify-between items-center bg-[#28293D]">
                        <div className='flex justify-center flex-col gap-[24px]'>
                            <div>
                                <Image
                                    src="/autodigg2.png"
                                    width={132}
                                    height={36}
                                    alt=""
                                />
                            </div>
                            <div className='max-w-[424px]'>
                                <p className='font-[400] text-[14px] text-[#8f90a6] leading-[24px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[78px] items-end justify-center'>
                            <div className='flex gap-[30px]'>
                                    <Image
                                    src='/Group 59.png'
                                    width={40}
                                    height={40}
                                    alt=""
                                    />
                                    <Image 
                                    src='/Group 60.png'
                                    width={40}
                                    height={40}
                                    alt=""
                                    />
                                    <Image
                                    src='/Group 61.png'
                                    width={40}
                                    height={40}
                                    alt=""
                                    />
                            </div>
                            <div className='flex justify-center items-center gap-[32px] whitespace-nowrap'>
                                <a href="" className='font-[500] text-[14px] text-[#ffffff] leading-[24px]'>How It Works</a>
                                <a href="" className='font-[500] text-[14px] text-[#ffffff] leading-[24px]'>Blog</a>
                                <a href="" className='font-[500] text-[14px] text-[#ffffff] leading-[24px]'>Frequently Asked Questions</a>
                                <a href="" className='font-[500] text-[14px] text-[#ffffff] leading-[24px]'>Are You A Dealer?</a>
                                <a href="" className='font-[500] text-[14px] text-[#ffffff] leading-[24px]'>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="py-[24px] px-[60px] bg-[#1C1C28] flex justify-between items-center">
                        <div>
                            <p className='font-[400] text-[10px] text-[#8f90a6] leading-[12px]'>© AutoDigg 2021. All Rights Reserved.</p>
                        </div>
                        <div className='flex justify-center items-center gap-[32px]'>
                            <div>
                                <a href="" className='font-[600] text-[10px] text-[#FFFFFF] leading-[16px]'>Terms Of Services</a>
                            </div>
                            <div>
                                <a href="" className='font-[600] text-[10px] text-[#FFFFFF] leading-[16px]'>Privacy Policies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
