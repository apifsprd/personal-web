import React from 'react';
import SectionTemplate from '../shared/SectionTemplate';

function BlogsSection(props: { lang: string }) {
  return (
    <SectionTemplate>
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <div
          className="tenor-gif-embed"
          data-postid="25432664"
          data-share-method="host"
          data-aspect-ratio="1.2549"
          data-width="20%"
        >
          <a href="https://tenor.com/view/capoo-capoo-type-capoo-computer-gif-25432664">
            Capoo Capoo Type GIF
          </a>
          from <a href="https://tenor.com/search/capoo-gifs">Capoo GIFs</a>
        </div>{' '}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        ></script>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xl font-montserrat text-black font-semibold">
            {props.lang === 'en'
              ? ' The article is being written'
              : 'Artikelnya lagi dibuat'}
          </p>
          <p className="text-lg font-montserrat text-black font-normal">
            {props.lang === 'en'
              ? 'Please come back later, thank you for waiting'
              : 'Berkunjunglah lain waktu, Terima kasih sudah menunggu'}
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}

export default BlogsSection;
