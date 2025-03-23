import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import VehicleSelector from './VehicleSelector';
import PassengerVehicle from './PassengerVehicle';
import CommercialVehicle from './CommercialVehicle';

const Banner: React.FC = () => {
  const [selected, setSelected] = useState<'passenger' | 'commercial'>(
    'passenger'
  );

  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { margin: '-30% 0px' });

  return (
    <section className='bg-black text-white flex flex-col items-center justify-center text-center py-10'>
      {/* Heading */}
      <h2 className='text-2xl md:text-4xl xl:text-5xl font-light'>
        Evolving the drive with{' '}
        <span className='font-semibold'>360-degree</span>
        <br />
        nonwoven solutions
      </h2>

      {/* Motion Container */}
      <motion.div
        ref={contentRef}
        className='w-full mt-16 hidden md:block'
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <section className='h-screen flex justify-between mx-8'>
          {/* Left Section (30%) */}
          <div className='w-3/10 hidden md:flex bg-black text-white flex-col justify-center items-center p-6'>
            <VehicleSelector selected={selected} setSelected={setSelected} />
          </div>

          {/* Right Section (50%) */}
          <div className='w-6/10 hidden md:flex flex-col justify-center items-center p-8  text-white'>
            {selected === 'passenger' ? (
              <PassengerVehicle />
            ) : (
              <CommercialVehicle />
            )}
          </div>
        </section>
      </motion.div>
      <div className='flex md:hidden w-full flex flex-col justify-center items-center  text-white'>
        <PassengerVehicle />
        <CommercialVehicle />
      </div>
    </section>
  );
};

export default Banner;
