"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductPage = () => {
    const [bigImage, setBigImage] = useState("/image/image.png");
    const [smallImages, setSmallImages] = useState([
        "/image/Image1.png",
        "/image/Image2.png",
        "/image/Image3.png"
    ]);

    const handleImageClick = (index) => {
        const newBigImage = smallImages[index];
        const newSmallImages = [...smallImages];
        newSmallImages[index] = bigImage;
        setBigImage(newBigImage);
        setSmallImages(newSmallImages);
    };

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    return (
        <div className='flex flex-col lg:flex-row my-5'>
            {/* Start Pic Part */}
            <div className='flex w-full lg:w-[45%] flex-col px-2 lg:px-10'>
                <div className='mb-5 flex justify-center'>
                    <Image src={bigImage} width={493} height={677} className='w-full h-auto max-w-full' />
                </div>
                <div className='flex items-center justify-center w-full md:gap-5 lg:justify-around'>
                    {smallImages.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            width={149}
                            height={249}
                            className='w-1/3 sm:w-1/4 md:w-1/4 lg:w-[100] xl:w-[149] mx-2 cursor-pointer'
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
            </div>
            {/* End Pic Part */}

            {/*Start Text part */}
            <div className='w-full lg:w-[55%] flex flex-col gap-6 px-2 lg:px-0 lg:pr-2'>
                <div className='flex flex-col gap-3'>
                    <div className='w-[90px] bg-pink-400 text-[#52057B] inline text-[12px] font-400 px-2 py-[6px] leading-3 rounded mt-5 lg:mt-0'>Lehnga Choli</div>
                    <div className='font-600 text-[20px] lg:text-[32px] leading-8 lg:leading-12'>Faux Georgette Lavender Party Wear Sequence Embroidery Work Readymade Lehenga Choli</div>
                    <div className='font-600 leading-9 lg:leading-[43.57px] text-2xl lg:text-4xl text-[#11998E]'><span>&#x20B9;</span> 2599.10</div>
                    <div className='font-400 text-[14px] lg:text-[16px] leading-5 lg:leading-6 text-[#828282]'>We provide a <span className='font-600 text-black'>one-year warranty</span> in case there are any issues with our products.</div>
                </div>

                {/* Start Choose color and size button box */}
                <div>
                    {/* Choose Color */}
                    <div className='flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[69px] py-5 border-y border-slate-300'>
                        <div className='text-[#828282] font-400 text-[14px] leading-4'>Choose Color</div>
                        <div className='flex flex-wrap items-center gap-2 mt-3 lg:mt-0'>
                            {['Black', 'Gray', 'White', 'Red'].map((color) => (
                                <div
                                    key={color}
                                    className={`productPageColorButton ${selectedColor === color ? 'selected' : ''}`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div className='flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[69px] py-5 border-b border-slate-300'>
                        <div className='text-[#828282] font-400 text-[14px] leading-4'>Size</div>
                        <div className='flex flex-wrap items-center gap-2 mt-3 lg:mt-0'>
                            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                <div
                                    key={size}
                                    className={`productPageSizeButton ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* End Choose color and size button box */}

                {/*Start Buy and Cart Button */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-4 h-auto lg:h-[52px]'>
                    <button className='Buy-CartButton bg-[#52057B] text-white w-full  mb-3 lg:mb-0 md:w-1/2'>Buy Now</button>
                    <div className='Buy-CartButton border border-black flex items-center justify-center gap-2 hover:cursor-pointer w-full  md:w-1/2'>
                        <Image src="/icon/cartIcon.svg" width={17} height={16} />
                        <button>Add to Cart</button>
                    </div>
                </div>
                {/* End Buy and Cart Button */}

                {/* Start product Feature Icon */}
                <div className="grid grid-cols-2 gap-4 pb-5 border-b">
                    <div className='flex items-center gap-3'>
                        <Image src="icon/StoreProduct.svg" width={18} height={22} />
                        <span>Original store product</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src="icon/Waranty.svg" width={18} height={22} />
                        <span>Long Term Warranty</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src="icon/TrustedShop.svg" width={18} height={22} />
                        <span>100% trusted shop</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src="icon/Lovable.svg" width={18} height={22} />
                        <span>Most Lovable</span>
                    </div>
                </div>
                {/* End product Feature Icon */}

                {/* Start Social Media Icon */}
                <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8'>
                    <div className='flex items-center gap-2'>
                        <span className='font-400 text-md leading-5'>Share</span>
                        <div className='bg-[#1877F2] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/Facebook.svg" width={17} height={17} />
                        </div>
                        <div className='bg-[#1D9BF0] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/Twiter.svg" width={17} height={17} />
                        </div>
                        <div className='bg-[#5BD366] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/WhatsApp.svg" width={17} height={17} />
                        </div>
                        <div className='bg-[#E34574] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/Instagram.svg" width={17} height={17} />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>Add to Favorite</span>
                        <div className='rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/Favorite.svg" width={17} height={17} />
                        </div>
                    </div>
                </div>
                {/* End Social Media Icon */}
            </div>
            
        </div>


    )
}

export default ProductPage