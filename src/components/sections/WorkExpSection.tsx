import React from 'react';
import SectionTemplate from '../shared/SectionTemplate';
import { Dot } from 'lucide-react';

import workExperiences from '@/app/api/workexp.json';
import LoadingSection from './LoadingSection';

function WorkExpSection(props: { lang: string }) {
  const [workExpData, setWorkExpData] = React.useState(workExperiences.data);
  const [loading, setLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(
    workExperiences.data[0].id
  );
  const handleClick = (id: number) => {
    setLoading(true);
    setSelectedItem(id);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <SectionTemplate>
      <p className="text-2xl font-montserrat text-sky-300 font-semibold">
        {props.lang === 'en'
          ? 'Where I’ve Worked'
          : 'Di mana saya telah bekerja'}
      </p>
      <div className="w-full h-[50%] grid grid-cols-3 justify-center items-center gap-5">
        <div className="col-span-1 h-full flex flex-col justify-start items-start gap-5">
          {workExpData.map((workExp: any, index) => (
            <a
              href={`#${workExp.id}`}
              onClick={() => handleClick(workExp.id)}
              className="flex flex-row justify-start items-start gap-2 hover:underline underline-offset-4 cursor-pointer hover:text-sky-300"
              key={index}
            >
              <div className="flex flex-col">
                <p
                  className={`font-montserrat text-lg  ${
                    selectedItem === workExp.id
                      ? 'underline underline-offset-4 font-semibold'
                      : ''
                  }`}
                >
                  {workExp.company}
                </p>
                <p className="font-montserrat text-base font-normal text-gray-400">
                  {props.lang === 'en'
                    ? workExp.location_en
                    : workExp.location_id}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="col-span-2 h-full flex flex-col justify-start items-start gap-3">
          {loading ? (
            <LoadingSection />
          ) : (
            <>
              <div className="flex flex-col justify-start items-start gap-0">
                <p className="font-montserrat text-2xl font-semibold">
                  {
                    workExpData.find((item) => item.id === selectedItem)
                      ?.position
                  }
                </p>
                <p className="font-montserrat text-lg font-normal text-gray-400">
                  @{' '}
                  {
                    workExpData.find((item) => item.id === selectedItem)
                      ?.company
                  }
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <p className="font-lora text-lg font-normal">
                  {workExpData.find((item) => item.id === selectedItem)?.date}
                </p>
                <Dot color="lightgray" size={18} />
                <p className="font-lora text-lg font-normal text-gray-400">
                  {
                    workExpData.find((item) => item.id === selectedItem)
                      ?.work_length
                  }
                </p>
              </div>
              <p className="font-hind text-lg font-normal whitespace-pre-line leading-relaxed">
                {props.lang === 'en'
                  ? workExpData.find((item) => item.id === selectedItem)
                      ?.description_en
                  : workExpData.find((item) => item.id === selectedItem)
                      ?.description_id}
              </p>
            </>
          )}
        </div>
      </div>
    </SectionTemplate>
  );
}

export default WorkExpSection;
