import Image from 'next/image'
import React from 'react'

const ProductPage = () => {
    return (
        <div>
            <div className='flex w-[45%] flex-col p-10'>
                <div className='mb-5'>
                    <Image src="/image/image.png" width={493} height={677} />
                </div>
                <div className='flex items-center'>
                    <Image src="/image/Image1.png" width={149} height={249} />
                    <Image src="/image/Image2.png" width={149} height={249} className='mx-6' />
                    <Image src="/image/Image3.png" width={149} height={249} />
                </div>

            </div>
            <div>
                <div>
                    <div>Lehnga Choli</div>
                    <div>Faux Georgette Lavender Party Wear Sequence Embroidery Work Readymade Lehenga Choli</div>
                    <div>2599.10</div>
                    <div>We provide a one-year warranty in case there are any issues with our products.</div>
                </div>
                <div></div>
                <div></div>

            </div>
        </div>
    )
}

export default ProductPage