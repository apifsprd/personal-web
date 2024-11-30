import React from "react";
import Image from "next/image";

function LoadingSection() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 xl:pt-0">
      <Image
        src="/gif/load-142.gif"
        alt="loading"
        width={80}
        height={80}
        unoptimized
      />
      <p className="text-sm font-montserrat">Loading ...</p>
    </div>
  );
}

export default LoadingSection;
