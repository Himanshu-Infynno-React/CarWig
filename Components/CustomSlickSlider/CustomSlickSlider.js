import React from 'react'
import ImageGallery from 'react-image-gallery';

function CustomSlickSlider({ cars }) {


    const images = cars.photos.map((data) => {
        return {
            original: data,
            thumbnail: data,
        }
    })


    return (
        <>
            <section className='max-w-[1440px] max-h-[828px] bg-[#1e1e1e] py-[36px] px-[70px] '>
                <ImageGallery showPlayButton={false} items={images} />
            </section>
        </>
    )
}

export default CustomSlickSlider
