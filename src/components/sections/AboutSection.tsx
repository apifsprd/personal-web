import React from "react";
import SectionTemplate from "../shared/SectionTemplate";
import WorkExpSection from "./WorkExpSection";
import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";

function AboutSection(props: { lang: string }) {
  return (
    <SectionTemplate>
      <div className="flex flex-col justify-center items-start gap-3">
        <div className="my-5 w-full flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-1">
            <Image
              src="/images/apifsprd-siluet.jpg"
              alt="photo-profile"
              width={110}
              height={110}
              className="rounded-full border-sky-300"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-2xl font-bold font-montserrat text-black">
              APIF SUPRIADI
            </p>
            <p className="font-montserrat text-base  text-black">
              {props.lang === "en"
                ? "Software Developer"
                : "Pengembang Aplikasi"}
            </p>
            <div className="flex justify-center items-start gap-2">
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
        </div>
        <p className="text-base font-montserrat leading-loose text-black">
          {props.lang === "en"
            ? "Hi, Nice to meet you! I’m a passionate developer from Indonesia, currently working as a mobile app developer at "
            : "Halo, Senang bertemu kamu! Saya adalah seorang pengembang aplikasi asal Indonesia, saat ini bekerja sebagai pengembang aplikasi seluler di "}{" "}
          <a
            href="https://uiii.ac.id"
            target="_blank"
            className="underline underline-offset-4 text-[#172B4D] font-bold"
          >
            Universitas Islam Internasional Indonesia (UIII)
          </a>
          {". "}
          {props.lang === "en"
            ? "I graduated with a Bachelor's degree in Informatics Engineering from"
            : "Saya lulusan jurusan Teknologi Informasi dari"}
          ,{" "}
          <a
            href="https://antarbangsa.ac.id"
            target="_blank"
            className="underline underline-offset-4 text-[#B23033] font-bold"
          >
            STMIK Antar Bangsa
          </a>
          ,{" "}
          {props.lang === "en"
            ? "where I cultivated a strong foundation in technology and problem-solving"
            : "tempat saya mengembangkan fondasi yang kuat dalam teknologi dan pemecahan masalah"}
          .
        </p>
        <p className="text-base font-montserrat leading-loose text-black">
          {props.lang === "en"
            ? "I thrive on learning new things and always enjoy exploring the latest trends and techniques in the tech world. Beyond coding, I am a reader and a big fan of football. Whether it's diving into a good book or watching an exciting match, I believe in staying curious and inspired. My goal is to keep growing as a engineer and contribute meaningfully to every project I work on."
            : "Saya sangat senang mempelajari hal-hal baru dan selalu menikmati menjelajahi tren dan teknik terbaru di dunia teknologi. Selain coding, saya adalah seorang pembaca dan penggemar berat sepak bola. Entah itu membaca buku yang bagus atau menonton pertandingan yang menarik, saya percaya bahwa saya akan selalu ingin tahu dan terinspirasi. Tujuan saya adalah untuk terus berkembang sebagai seorang engineer dan berkontribusi secara bermakna pada setiap proyek yang saya kerjakan."}
        </p>
      </div>
      <div className="w-full my-[1rem]"></div>
      <WorkExpSection lang={props.lang} />
      <div className="w-full my-[1rem]"></div>
    </SectionTemplate>
  );
}

export default AboutSection;
