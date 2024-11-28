import React from "react";
import { Dot } from "lucide-react";
import workExperiences from "@/app/api/workexp.json";
import LoadingSection from "./LoadingSection";

function WorkExpSection(props: { lang: string }) {
  const [workExpData] = React.useState(workExperiences.data);
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
    <div>
      <p className="text-2xl font-montserrat text-sky-300 font-semibold">
        {props.lang === "en"
          ? "Where I’ve Worked"
          : "Di mana saya telah bekerja"}
      </p>
      <div className="w-full h-auto grid grid-cols-1 justify-center items-center gap-5 xl:grid-cols-3 xl:gap-8">
        <div className="h-full flex flex-row justify-start items-start gap-5 overflow-x-auto whitespace-nowrap xl:flex-col xl:overflow-x-visible xl:whitespace-normal">
          {workExpData.map((workExp: any, index) => (
            <a
              href={`#${workExp.id}`}
              onClick={() => handleClick(workExp.id)}
              className="flex flex-row justify-start items-start gap-2 hover:underline underline-offset-4 cursor-pointer hover:text-sky-300"
              key={index}
            >
              <div className="flex flex-col">
                <p
                  className={`font-montserrat text-base  ${
                    selectedItem === workExp.id
                      ? "underline underline-offset-4 font-semibold"
                      : ""
                  }`}
                >
                  {workExp.company}
                </p>
                <p className="font-montserrat text-base font-normal text-gray-400">
                  {props.lang === "en"
                    ? workExp.location_en
                    : workExp.location_id}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="h-full flex flex-col justify-start items-start gap-5 xl:col-span-2">
          {loading ? (
            <LoadingSection />
          ) : (
            <>
              <div className="flex flex-col justify-start items-start gap-0">
                <p className="font-montserrat text-lg font-semibold">
                  {
                    workExpData.find((item) => item.id === selectedItem)
                      ?.position
                  }
                </p>
                <p className="font-montserrat text-base font-normal text-gray-400">
                  @{" "}
                  {
                    workExpData.find((item) => item.id === selectedItem)
                      ?.company
                  }
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <p className="font-hind text-sm font-normal">
                  {workExpData.find((item) => item.id === selectedItem)?.date}
                </p>
                <Dot color="lightgray" size={18} />
                <p className="font-hind text-sm font-normal text-gray-400">
                  {
                    workExpData.find((item) => item.id === selectedItem)
                      ?.work_length
                  }
                </p>
              </div>
              <ol className="flex flex-col justify-start items-start gap-1">
                {props.lang === "en"
                  ? workExpData
                      .find((item) => item.id === selectedItem)
                      ?.desc_items_en.map((item: string, index: number) => (
                        <li key={index} className="flex flex-row gap-2">
                          <p>&#8226;</p>
                          <p className="font-normal text-base font-hind">
                            {item}
                          </p>
                        </li>
                      ))
                  : workExpData
                      .find((item) => item.id === selectedItem)
                      ?.desc_items_id.map((item: string, index: number) => (
                        <li key={index} className="flex flex-row gap-2">
                          <p>&#8226;</p>
                          <p className="font-normal text-base font-hind">
                            {item}
                          </p>
                        </li>
                      ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkExpSection;
