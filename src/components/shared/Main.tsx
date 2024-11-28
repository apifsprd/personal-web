"use client";
import React from "react";

import navs from "@/app/api/navs.json";
import ButtonNav from "../ui/Buttons";
import AboutSection from "../sections/AboutSection";
import LoadingSection from "../sections/LoadingSection";
import BlogsSection from "../sections/BlogsSection";
import { Languages } from "lucide-react";

function Main() {
  const navsData = navs.nav;
  const [selectedNav, setSelectedNav] = React.useState("home");
  const [selectedLang, setSelectedLang] = React.useState("en");
  const [loading, setLoading] = React.useState(false);

  const handleClick = (slug: string) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedNav(slug);
      setLoading(false);
    }, 1000);
  };
  const handleChangeLang = (lang: string) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedLang(lang);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full h-[100rem] flex flex-col justify-start items-center xl:h-screen">
      <div className="w-full h-[5%] flex flex-col justify-center items-center xl:mt-[1%]">
        <div className="w-full h-full flex justify-center items-center">
          <a
            href="#"
            className="text-lg font-montserrat font-semibold uppercase"
          >
            Apif Supriadi
          </a>
        </div>
        <div className="w-full h-full flex justify-center items-center gap-2 xl:gap-32">
          {navsData.map((nav: any) => (
            <ButtonNav
              key={nav.slug}
              title={nav.name}
              id={nav.slug}
              eventClick={() => handleClick(nav.slug)}
              selected={selectedNav}
            />
          ))}
          <div
            onClick={() =>
              handleChangeLang(selectedLang === "en" ? "id" : "en")
            }
            className="w-[3rem] py-2 mr-10 flex flex-row gap-2 justify-center items-center rounded-md cursor-pointer  hover:bg-transparent"
          >
            <Languages size={24} color="black" />
            <p className="text-sm font-montserrat font-semibold">
              {selectedLang === "en" ? "EN" : "ID"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[95%] flex flex-col justify-center items-center ">
        {loading ? (
          <LoadingSection />
        ) : (
          <>
            {selectedNav === "home" && <BlogsSection lang={selectedLang} />}
            {selectedNav === "about" && <AboutSection lang={selectedLang} />}
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
