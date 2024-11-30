import React from "react";
import Image from "next/image";
import blog_posts from "@/app/api/blogs.json";

type Props = { lang: string; slug: string; eventBack: () => void };

const Post = (props: Props) => {
  const post = blog_posts.data.find((post: any) => post.slug === props.slug);
  return (
    <div className="w-full h-auto flex flex-col justify-center items-start gap-2">
      <p className="text-md font-bold font-montserrat text-sky-400">
        {post?.category}
      </p>
      <p className="text-2xl font-semibold font-lora  text-black">
        {post?.title}
      </p>
      <p className="text-md font-normal font-lora  text-black">
        {post?.subtitle}
      </p>
      <div className="my-2 flex flex-row justify-start items-center gap-3 flex-wrap">
        <Image
          src={post?.author?.avatar || ""}
          alt="photo-profile"
          width={50}
          height={50}
          className="rounded-full"
          // layout="responsive"
        />
        <div className="flex flex-col justify-center items-start">
          <p className="text-md font-hind  text-black">{post?.author.name}</p>
          <p className="text-sm font-hind text-gray-500">{post?.date}</p>
        </div>
      </div>
      <Image
        src={post?.image.url || ""}
        alt="photo-profile"
        width={50}
        height={50}
        className="rounded-md"
        layout="responsive"
      />
      <p className="text-sm font-normal font-hind text-gray-400">
        {post?.image.source.label}
      </p>
      {post?.contents.map((content: any, index: number) =>
        content.type === "paragraph" || content.type === "subheading" ? (
          <p
            key={index}
            className={`text-base font-lora leading-relaxed whitespace-normal my-1  text-black ${
              content.type === "subheading" ? "font-semibold" : ""
            }`}
          >
            {content.value}
          </p>
        ) : (
          <>
            <Image
              key={index}
              src={`${content.value}` || ""}
              alt="photo-profile"
              width={50}
              height={50}
              className="rounded-md"
              layout="responsive"
            />
            <p className="text-sm font-normal font-hind text-gray-400">
              {content.source.label}
            </p>
          </>
        )
      )}
      <p className="mt-[2rem] text-sm font-semibold font-hind text-black">
        {props.lang === "en" ? "Tags:" : "Tag:"}
      </p>
      <div className="w-full h-auto flex flex-row flex-wrap justify-start items-center gap-3">
        {post?.tags.map((source: any, index: number) => (
          <p
            key={index}
            className="text-sm font-normal font-montserrat text-black"
          >
            #{source}
          </p>
        ))}
      </div>
      <p className="text-sm font-semibold font-hind text-black">
        {props.lang === "en" ? "Sources:" : "Sumber:"}
      </p>
      <div className="w-full h-auto flex flex-row justify-start items-center gap-3 flex-wrap">
        {post?.sources.map((source: any, index: number) => (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="text-sm font-semibold font-montserrat text-sky-400 hover:underline underline-offset-4 cursor-pointer hover:text-sky-300"
          >
            {source.label}
          </a>
        ))}
      </div>
      <div
        onClick={() => props.eventBack()}
        className="w-full h-[3rem] mt-[2rem] p-2  cursor-pointer flex justify-start items-center"
      >
        <p className="text-base font-semibold font-montserrat text-black">
          {props.lang === "en" ? "<< Back" : "<< Kembali"}
        </p>
      </div>
    </div>
  );
};

export default Post;
