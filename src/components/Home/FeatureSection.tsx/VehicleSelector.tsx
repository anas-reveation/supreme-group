import React from 'react';

interface VehicleSelectorProps {
  selected: 'passenger' | 'commercial';
  setSelected: (vehicle: 'passenger' | 'commercial') => void;
}

const VehicleSelector: React.FC<VehicleSelectorProps> = ({
  selected,
  setSelected,
}) => {
  return (
    <div className=' pl-14 self-center mx-auto relative  2xl:py-10 py-5 flex flex-col'>
      <button
        type='button'
        className={` transition-all duration-300 ${
          selected === 'passenger' ? 'opacity-100' : 'opacity-20'
        }`}
        onClick={() => setSelected('passenger')}
      >
        <h3 className='sg-translate font-semibold text-left pb-2'>
          Passenger vehicles
        </h3>
        <h6 className='sg-translate font-light text-left 2xl:text-md'>
          Revving up innovation from <br /> interior to exterior.
        </h6>
      </button>

      <button
        type='button'
        className={` mt-14 transition-all duration-300 ${
          selected === 'commercial' ? 'opacity-100' : 'opacity-20'
        }`}
        onClick={() => setSelected('commercial')}
      >
        <h3 className='sg-translate font-semibold text-left pb-2'>
          Commercial vehicles
        </h3>
        <h6 className='sg-translate font-light text-left 2xl:text-md'>
          Advancing engineering <br /> for heavy-duty vehicles.
        </h6>
      </button>

      {/* Vertical Slider Indicator */}
      <div className='slider-parent absolute left-0 h-full w-[2px] rounded-md bg-gray top-0'>
        <div
          className={`slider-height w-[2px] bg-white rounded-md transition-all duration-300 ${
            selected === 'passenger' ? 'h-[50%] top-0' : 'h-[50%] top-[50%]'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default VehicleSelector;
