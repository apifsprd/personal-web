import React from 'react';
import SectionTemplate from '../shared/SectionTemplate';
import Image from 'next/image';

function LoadingSection() {
  return (
    <SectionTemplate>
      <div className="w-[100%] h-[100%] flex flex-col justify-center items-center gap-2">
        <Image src="/gif/load-142.gif" alt="loading" width={80} height={80} />
        <p className="text-sm font-montserrat">Loading ...</p>
      </div>
    </SectionTemplate>
  );
}

export default LoadingSection;
