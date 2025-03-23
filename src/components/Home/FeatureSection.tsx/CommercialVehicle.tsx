import React from 'react';
import Commercial from '../../../assets/images/Commercial.svg';
const CommercialVehicle: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center p-6'>
      <div className='block md:hidden'>
        <span className='flex flex-col align-center text-center'>
          <h3 className='sg-translate font-semibold text-left pb-2 text-[#5CD6FF] '>
            Commercial vehicles
          </h3>
          <h6 className='sg-translate font-light text-left 2xl:text-md'>
            Advancing engineering <br /> for heavy-duty vehicles.
          </h6>
        </span>
      </div>
      {/* Main Image Section (Full Width & 70% Height) */}
      <div className='w-full h-[70vh] flex justify-center items-center'>
        <img
          src={Commercial}
          alt='Selected Vehicle Section'
          className='w-[80%] h-full object-contain transition-opacity duration-300'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default CommercialVehicle;
