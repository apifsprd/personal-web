import React from "react";
import SectionTemplate from "../shared/SectionTemplate";
import Image from "next/image";

function LoadingSection() {
  return (
    <SectionTemplate>
      <div className="w-full h-auto flex flex-col justify-center items-center gap-2 pt-[50%] xl:pt-0">
        <Image
          src="/gif/load-142.gif"
          alt="loading"
          width={80}
          height={80}
          unoptimized
        />
        <p className="text-sm font-montserrat">Loading ...</p>
      </div>
    </SectionTemplate>
  );
}

export default LoadingSection;
