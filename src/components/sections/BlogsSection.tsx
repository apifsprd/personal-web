import React from "react";
import SectionTemplate from "../shared/SectionTemplate";

function BlogsSection(props: { lang: string }) {
  return (
    <SectionTemplate>
      <div className="w-full h-[20rem] flex flex-col justify-center items-center gap-2">
        <p className="text-base font-montserrat text-black font-semibold">
          {props.lang === "en"
            ? "Here will be the lot of notes"
            : "Disini akan memuat banyak tulisan/catatan"}
        </p>
        <p className="text-base font-montserrat text-black font-normal">
          {props.lang === "en"
            ? "Please come back later, thank you for waiting"
            : "Berkunjunglah lain waktu, Terima kasih sudah menunggu"}
        </p>
      </div>
    </SectionTemplate>
  );
}

export default BlogsSection;
