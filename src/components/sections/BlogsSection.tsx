import React from "react";
import SectionTemplate from "../shared/SectionTemplate";

function BlogsSection(props: { lang: string }) {
  return (
    <SectionTemplate>
      <div className="w-full h-full flex flex-col justify-start items-start xl:justify-center xl:items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-xl font-montserrat text-black font-semibold">
            {props.lang === "en"
              ? " The article is being written"
              : "Artikelnya lagi dibuat"}
          </p>
          <p className="text-lg font-montserrat text-black font-normal">
            {props.lang === "en"
              ? "Please come back later, thank you for waiting"
              : "Berkunjunglah lain waktu, Terima kasih sudah menunggu"}
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}

export default BlogsSection;
