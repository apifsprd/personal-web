import React from "react";

function SectionTemplate({ children }: any) {
  return (
    <div className="w-full h-full pt-[5%] flex flex-col justify-start items-start gap-3 xl:w-[70%]  xl:justify-center xl:item-start">
      {children}
    </div>
  );
}

export default SectionTemplate;
