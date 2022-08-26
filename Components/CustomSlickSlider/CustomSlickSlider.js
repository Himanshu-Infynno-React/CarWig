import React from 'react'
import ImageGallery from 'react-image-gallery';

function CustomSlickSlider({ cars }) {


    const images = cars.photos ? cars.photos.map((data) => {
        return {
            original: data,
            thumbnail: data,
        }
    }) : [
        {
            original : "/defaultCar.png",
            thumbnail : "/defaultCar.png"
        }
    ]


    return (
        <>
            <section className='max-w-[1440px] max-h-[828px] bg-[#1e1e1e] py-[36px] px-[70px] '>
                <ImageGallery showPlayButton={false} items={images} />
            </section>
        </>
    )
}

export default CustomSlickSlider
