import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

function ProfileSection(props: { lang: string }) {
  return (
    <div className="w-screen h-auto grid grid-cols-1 justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-1">
        <Image
          src="/images/apifsprd-siluet.jpg"
          alt="photo-profile"
          width={140}
          height={140}
          className="rounded-full border-sky-300"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="font-bold font-montserrat text-xl">APIF SUPRIADI</p>
        <p className="font-montserrat text-md">
          {props.lang === "en" ? "Software Developer" : "Pengembang Aplikasi"}
        </p>
        <p className="font-hind text-md text-gray-400">@apifsprd</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <a
          href="https://github.com/apifsprd"
          target="_blank"
          className="p-3 rounded-md hover:bg-slate-200"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/apifsprd/"
          target="_blank"
          className="p-3 rounded-md hover:bg-slate-200"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/apifsprd/"
          target="_blank"
          className="p-3 rounded-md hover:bg-slate-200"
        >
          <Instagram size={24} />
        </a>
      </div>
    </div>
  );
}

export default ProfileSection;
