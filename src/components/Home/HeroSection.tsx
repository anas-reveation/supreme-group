import React from 'react';

const HeroSection = () => {
  return (
    <section className='lg:min-h-screen min-h-[450px] flex items-center justify-center bg-[#00000099]'>
      <div className='text-center w-11/12 mx-auto'>
        <span className='font-light text-white text-lg xl:text-xl 2xl:text-2xl leading-snug'>
          Performance in motion
        </span>
        <h2 className='text-white  text-2xl md:text-4xl xl:text-5xl font-light leading-tight'>
          <span className='font-semibold'>
            Soft Trims and <span className='text-lightBlue'>NVH Solutions</span>
          </span>
          <br className='' />
          for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
