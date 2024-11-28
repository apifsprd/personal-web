import React from "react";

function SectionTemplate({ children }: any) {
  return (
    <div className="w-full h-full pt-[5%] px-[1.5rem] flex flex-col justify-start items-start gap-3 xl:w-[55%] xl:pt-[2%]">
      {children}
    </div>
  );
}

export default SectionTemplate;
