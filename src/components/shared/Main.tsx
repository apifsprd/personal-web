"use client";
import React from "react";

import HomeSection from "@/components/sections/HomeSection";
import ProfileSection from "../sections/ProfileSection";
import navs from "@/app/api/navs.json";
import ButtonNav from "../ui/Buttons";
import AboutSection from "../sections/AboutSection";
import WorkExpSection from "../sections/WorkExpSection";
import LoadingSection from "../sections/LoadingSection";
import BlogsSection from "../sections/BlogsSection";
import { Languages } from "lucide-react";

function Main() {
  const navsData = navs.data;
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
    <main className="w-full h-[97rem] flex flex-col xl:h-screen xl:flex-row">
      <div className="w-full h-[40%] flex flex-col justify-center items-center xl:w-[30%] xl:h-full">
        <ProfileSection lang={selectedLang} />
      </div>
      <div className="w-full h-[60%] flex flex-col justify-center items-center xl:grow xl:h-full xl:pb-[10%]">
        <div className="w-full h-[10%]  flex flex-row justify-start gap-4 items-center overflow-x-auto whitespace-nowrap xl:h-[10%] xl:justify-around">
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
            className="px-4 py-2 mr-10 flex flex-row gap-2 justify-center items-center rounded-md cursor-pointer bg-gray-200 hover:bg-transparent"
          >
            <Languages size={24} color="black" />
            <p className="text-sm font-montserrat font-semibold">
              {selectedLang === "en" ? "EN" : "ID"}
            </p>
          </div>
        </div>
        <div className="w-full h-[90%]  p-5 flex flex-col justify-center items-center xl:h-[90%] xl:p-0">
          {loading ? (
            <LoadingSection />
          ) : (
            <>
              {selectedNav === "home" && <HomeSection lang={selectedLang} />}
              {selectedNav === "about" && <AboutSection lang={selectedLang} />}
              {selectedNav === "work-experience" && (
                <WorkExpSection lang={selectedLang} />
              )}
              {selectedNav === "blogs" && <BlogsSection lang={selectedLang} />}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
