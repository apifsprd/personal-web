import React from "react";
import Image from "next/image";

function LoadingSection() {
  return (
    <div className="w-full h-[100%] flex flex-col justify-center items-center gap-2 xl:pt-0">
      <Image
        src="/gif/load-142.gif"
        alt="loading"
        width={80}
        height={80}
        unoptimized
      />
      <p className="text-sm font-montserrat  text-black">Loading ...</p>
    </div>
  );
}

export default LoadingSection;
