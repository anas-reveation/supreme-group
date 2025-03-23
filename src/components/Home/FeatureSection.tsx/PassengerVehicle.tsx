import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  {
    id: 1,
    fullSrc: 'src/assets/images/completebody.svg',
    thumbSrc: 'src/assets/images/cabin.svg',
    name: 'Complete Body',
  },
  {
    id: 2,
    fullSrc: 'src/assets/images/Front.svg',
    thumbSrc: 'src/assets/images/cabin_1.svg',
    name: 'Front',
  },
  {
    id: 3,
    fullSrc: 'src/assets/images/Cabin_m.svg',
    thumbSrc: 'src/assets/images/cabin.svg',
    name: 'Cabin',
  },
  {
    id: 4,
    fullSrc: 'src/assets/images/Trunk.svg',
    thumbSrc: 'src/assets/images/cabin_2.svg',
    name: 'Trunk',
  },
  {
    id: 5,
    fullSrc: 'src/assets/images/Exterior.svg',
    thumbSrc: 'src/assets/images/cabin_3.svg',
    name: 'Exterior',
  },
];

const PassengerVehicle: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].fullSrc);

  return (
    <div className='w-full flex flex-col items-center p-6'>
      <div className='block md:hidden text-center mb-6'>
        <h3 className='font-semibold text-[#5CD6FF] pb-2'>
          Passenger Vehicles
        </h3>
        <h6 className='font-light text-md'>
          Revving up innovation from <br /> interior to exterior.
        </h6>
      </div>

      {/* Large Image Display for Desktop */}
      <div className='w-full h-[70vh] flex justify-center items-center hidden md:flex'>
        <img
          src={selectedImage}
          alt='Selected Vehicle Section'
          className='w-[80%] h-full object-contain transition-opacity duration-300'
          loading='lazy'
        />
      </div>

      {/* Thumbnails for Desktop */}
      <div className='w-full hidden md:flex justify-center gap-6 mt-6'>
        {images.map((image) => (
          <div
            key={image.id}
            className='flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110'
            onClick={() => setSelectedImage(image.fullSrc)}
          >
            <div className='w-20 h-20 flex justify-center items-center'>
              <img
                src={image.thumbSrc}
                alt={image.name}
                className={`w-full h-full object-contain transition-opacity duration-300 ${
                  selectedImage === image.fullSrc ? 'opacity-100' : 'opacity-50'
                }`}
                loading='lazy'
              />
            </div>
            <p
              className={`text-sm mt-2 ${
                selectedImage === image.fullSrc
                  ? 'text-white font-semibold'
                  : 'text-gray-400'
              }`}
            >
              {image.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View - Swiper */}
      <div className='w-full md:hidden mt-6'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className='w-full h-[60vh]'
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className='flex flex-col items-center'>
              <img
                src={image.fullSrc}
                alt={image.name}
                className='w-full h-full object-contain'
                loading='lazy'
              />
              <p className='text-sm mt-2 text-white font-semibold'>
                {image.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PassengerVehicle;
