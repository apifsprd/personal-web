import React from 'react';

function SectionTemplate({ children }: any) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-5">
      {children}
    </div>
  );
}

export default SectionTemplate;
