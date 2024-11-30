import React from "react";

function SectionTemplate({ children }: any) {
  return (
    <div className="w-full h-auto py-[5%] px-[1rem] flex flex-col justify-center items-center sm:w-[95%] lg:w-[75%] xl:w-[50%] xl:pt-[2%]">
      {children}
    </div>
  );
}

export default SectionTemplate;
