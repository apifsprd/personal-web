import React from 'react';
import SectionTemplate from '../shared/SectionTemplate';

function AboutSection(props: { lang: string }) {
  return (
    <SectionTemplate>
      <p className="text-2xl font-montserrat text-sky-300 font-semibold">
        {props.lang === 'en' ? 'About Me' : 'Tentang Saya'}
      </p>
      <p className="text-lg font-hind leading-relaxed">
        {props.lang === 'en'
          ? "Hello! I’m a passionate developer from Indonesia, currently working as a mobile app developer. I graduated with a Bachelor's degree in Informatics Engineering from"
          : 'Halo! Saya adalah seorang pengembang aplikasi asal Indonesia, saat ini bekerja sebagai pengembang aplikasi seluler. Saya lulusan jurusan Teknologi Informasi dari'}{' '}
        <a
          href="https://antarbangsa.ac.id"
          target="_blank"
          className="underline underline-offset-4 text-[#B23033] font-bold"
        >
          STMIK Antar Bangsa
        </a>
        ,{' '}
        {props.lang === 'en'
          ? 'where I cultivated a strong foundation in technology and problem-solving'
          : 'tempat saya mengembangkan fondasi yang kuat dalam teknologi dan pemecahan masalah'}
        .
      </p>
      <p className="text-lg font-hind leading-relaxed">
        {props.lang === 'en'
          ? "I thrive on learning new things and always enjoy exploring the latest trends and techniques in the tech world. Beyond coding, I am a reader and a big fan of football. Whether it's diving into a good book or watching an exciting match, I believe in staying curious and inspired. My goal is to keep growing as a engineer and contribute meaningfully to every project I work on."
          : 'Saya sangat senang mempelajari hal-hal baru dan selalu menikmati menjelajahi tren dan teknik terbaru di dunia teknologi. Selain coding, saya adalah seorang pembaca dan penggemar berat sepak bola. Entah itu membaca buku yang bagus atau menonton pertandingan yang menarik, saya percaya bahwa saya akan selalu ingin tahu dan terinspirasi. Tujuan saya adalah untuk terus berkembang sebagai seorang engineer dan berkontribusi secara bermakna pada setiap proyek yang saya kerjakan.'}
      </p>
    </SectionTemplate>
  );
}

export default AboutSection;
