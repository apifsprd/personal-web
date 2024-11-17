'use client';
import React from 'react';

import HomeSection from '@/components/sections/HomeSection';
import ProfileSection from '../sections/ProfileSection';
import navs from '@/app/api/navs.json';
import ButtonNav from '../ui/Buttons';
import AboutSection from '../sections/AboutSection';
import WorkExpSection from '../sections/WorkExpSection';
import LoadingSection from '../sections/LoadingSection';
import BlogsSection from '../sections/BlogsSection';
import { Languages } from 'lucide-react';

function Main() {
  const navsData = navs.data;
  const [selectedNav, setSelectedNav] = React.useState('home');
  const [selectedLang, setSelectedLang] = React.useState('en');
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
    <main className="grid grid-cols-1 w-[100%] h-[100%] xs:grid-cols-1 xs:h-[100%] sm:grid-cols-1 sm:h-[100%] md:grid-cols-1 md:h-[100%] lg:grid-cols-3 lg:h-[90%] xl:grid-cols-3 xl:h-[90%]">
      <div className="col-span-1 flex w-[100%] h-[100%] justify-center items-center">
        <ProfileSection lang={selectedLang} />
      </div>
      <div className="col-span-2 flex flex-col w-[100%] h-[100%] justify-center items-center ">
        <div className="w-[100%] h-[10%] flex flex-col justify-center items-center lg:flex-row xl:flex-row">
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
              handleChangeLang(selectedLang === 'en' ? 'id' : 'en')
            }
            className="p-2 w-[9%] flex flex-row gap-3 justify-center items-center rounded-md cursor-pointer bg-gray-200 hover:bg-transparent"
          >
            <Languages size={24} color="black" />
            <p className="text-sm font-montserrat font-semibold">
              {selectedLang === 'en' ? 'EN' : 'ID'}
            </p>
          </div>
        </div>
        <div className="w-[100%] h-[90%] flex flex-col justify-center items-center pb-[15%]">
          <div className="w-[80%] h-full flex flex-col justify-center items-center">
            {loading ? (
              <LoadingSection />
            ) : (
              <>
                {selectedNav === 'home' && <HomeSection lang={selectedLang} />}
                {selectedNav === 'about' && (
                  <AboutSection lang={selectedLang} />
                )}
                {selectedNav === 'work-experience' && (
                  <WorkExpSection lang={selectedLang} />
                )}
                {selectedNav === 'blogs' && (
                  <BlogsSection lang={selectedLang} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
