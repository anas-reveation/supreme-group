import React from 'react';
import Form from './Form';

const GetInTouch = () => {
  return (
    <div className='bg-[#0067B1] sm:pt-[14%] pt-[20%] pb-[4%]'>
      <div className='max-w-[1380px] mx-auto px-1.5 lg:w-10/12 relative -mt-[4rem] md:-mt-[6rem] lg:-mt-[8rem] xl:-mt-[10rem] 2xl:-mt-[12rem]'>
        <div className='bg-blueDark grid grid-cols-12 px-4 md:px-0 rounded-[10px] 2xl:grid-cols-11 py-8 md:py-10 lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem]'>
          <div className='grid grid-cols-1 gap-y-10 col-start-1 md:grid-cols-2 md:col-start-2 col-end-13 md:col-end-12 2xl:col-end-11 text-white mb-3'>
            {/* Left Column - Get in Touch */}
            <div>
              <span className='sg-translate text-2xl lg:text-[28px] xlg:text-3xl 2xl:text-4xl md:leading-snug lg:leading-snug 2xl:leading-snug font-semibold'>
                Get in touch
              </span>
              <div className='h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8'></div>
              <div className='md:hidden mt-6 mb-8'>
                <Form />
              </div>
              <span className='sg-translate block font-normal text-base md:text-lg 2xl:text-2xl'>
                For general enquiries
              </span>
              <ul className='list-none flex flex-col gap-3 md:gap-5 2xl:gap-7 pt-5 md:pt-7 2xl:pt-8'>
                <li className='flex flex-col gap-px items-start'>
                  <span className='sg-translate font-medium text-lg md:text-lg xl:text-xl'>
                    Address :
                  </span>
                  <span className='sg-translate font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl'>
                    110, 16th Road, Chembur, <br className='xl:hidden block' />{' '}
                    Mumbai - 400071
                  </span>
                </li>
                <li className='flex flex-col items-start gap-px text-base md:text-lg 2xl:text-xl'>
                  <span className='sg-translate font-medium text-lg md:text-lg xl:text-xl'>
                    Phone :
                  </span>
                  <a
                    href='tel:+912225208822'
                    className='font-normal hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-white text-opacity-90 text-sm md:text-base 2xl:text-xl'
                  >
                    +91 22 25208822
                  </a>
                </li>
                <li className='flex items-start flex-col gap-px text-base md:text-lg 2xl:text-xl'>
                  <span className='sg-translate font-medium text-lg md:text-lg xl:text-xl'>
                    Email :
                  </span>
                  <a
                    href='mailto:info@supremegroup.co.in'
                    className='font-normal text-white hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-opacity-90 text-sm md:text-base 2xl:text-xl'
                  >
                    info@supremegroup.co.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Form (Visible on larger screens) */}
            <div className='hidden md:block'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
