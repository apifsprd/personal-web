import React from 'react';
import SectionTemplate from '../shared/SectionTemplate';

function HomeSection(props: { lang: string }) {
  return (
    <SectionTemplate>
      <p className="text-2xl font-semibold font-montserrat text-sky-300">
        {props.lang === 'en' ? 'Hi, I am' : 'Halo, Saya'}
      </p>
      <p className="text-4xl font-bold font-montserrat">APIF SUPRIADI</p>
      <p className="text-lg font-hind leading-relaxed">
        {props.lang === 'en'
          ? " I'm a Software Engineer, My current role at"
          : 'Saya Pengembang Aplikasi, Peran saya saat ini di'}{' '}
        <a
          href="https://uiii.ac.id"
          target="_blank"
          className="underline underline-offset-4 text-[#172B4D] font-bold"
        >
          Universitas Islam Internasional Indonesia (UIII)
        </a>{' '}
        {props.lang === 'en'
          ? 'is Mobile App Developer. I believe that ease of use is the key to every successful application. Therefore, I am always open to learning and understanding what users truly want'
          : 'sebagai Pengembang Aplikasi Seluler. Saya percaya bahwa kemudahan penggunaan adalah kunci dari setiap aplikasi yang sukses. Oleh karena itu, saya selalu terbuka untuk belajar dan memahami apa yang benar-benar diinginkan pengguna'}
      </p>
    </SectionTemplate>
  );
}

export default HomeSection;
