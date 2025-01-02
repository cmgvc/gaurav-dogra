import React from 'react';

const NameTitle = () => {
  return (
    <div className="flex justify-center gap-6 mt-[16rem]">
      <h1 
        className="name-title text-[6rem] font-black text-[var(--text-color)] leading-none "
        style={{ 
          lineHeight: '0.8',
          transformOrigin: 'bottom'
        }}
      >
        GAURAV DOGRA
      </h1>
      <h1 
        className="name-title text-[6rem] font-black text-[var(--text-color)] leading-none transition-transform duration-500 hover:-translate-y-2 active:translate-y-2"
        style={{ 
          lineHeight: '0.8',
          transformOrigin: 'bottom'
        }}
      >
        
      </h1>
    </div>
  );
};

export default NameTitle;
