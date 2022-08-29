import Image from 'next/image'

function Header() {
    return (
        <>
            <div className="w-full  bg-[#FFFFFF] flex justify-center whitespace-nowrap items-center">
                <div className="mainHeader border-b-[1px] border-b-[#E4E4EB] w-[100%] py-[15px]  flex justify-center items-center gap-[290px]">
                    <nav className="flex justify-center list-none whitespace-nowrap items-center gap-[36px]">
                            <li className='font-[600] text-[12px] cursor-pointer text-[#28293d] leading-[20px] '>HOW IT WORKS</li>
                            <li className='font-[600] text-[12px] cursor-pointer text-[#28293d] leading-[20px] '>WHY US</li>
                            <li className='font-[600] text-[12px] cursor-pointer text-[#28293d] leading-[20px] '>CONTACT US</li>
                    </nav>
                    <div className='flex justify-center items-center gap-[230px]'>
                        <div className="flex justify-center items-center">
                            <Image
                                src='/autodigg.png'
                                alt='logo'
                                width={132}
                                height={36}
                                priority
                                // className='w-[132px] h-[36px]'
                            />
                        </div>
                        <div className="flex justify-center items-center gap-[36px]">
                            <div className='flex flex-col cursor-pointer gap-[5px]'>
                                <div className='flex justify-center items-center gap-[5px]'>
                                    <div>
                                        <Image
                                            src="/car.png"
                                            alt='hii'
                                            // className='w-[24px] h-[20px]'
                                            width={24}
                                            height={20}
                                        />
                                    </div>
                                    <div><h1 className='text-[12px] text-[#FF6B00] font-[600] leading-[20px] '>USED CAR FOR SELL</h1></div>
                                </div>
                                <div className='h-[3px] bg-[#FF8800] w-[150px]'></div>
                            </div>
                            <div className='flex justify-center items-center cursor-pointer h-[100%]'>
                                <button className='py-[8px] px-[20px] flex justify-center items-center bg-[#28293d] rounded-[13px]'><span className='text-[12px] leading-[20px] font-[600]  text-[#FFFFFF]'>SIGN IN/REGISTER</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
