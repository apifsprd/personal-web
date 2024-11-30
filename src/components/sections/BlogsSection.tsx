import React from "react";
import SectionTemplate from "../shared/SectionTemplate";
import blog_posts from "@/app/api/blogs.json";
import Image from "next/image";
import { Dot } from "lucide-react";
import Post from "./PostSection";

function BlogsSection(props: { lang: string }) {
  const [selectedPost, setSelectedPost] = React.useState("");
  return (
    <SectionTemplate>
      <div className="w-full h-auto px-1 flex flex-col justify-center items-start gap-3">
        {selectedPost == "" &&
          blog_posts.data.map((blog: any, index: number) => (
            <div
              className="w-full h-auto my-5 p-2 flex flex-row justify-between items-start gap-1 cursor-pointer hover:bg-slate-100  hover:text-sky-300 hover:rounded-md"
              key={index}
              onClick={() => setSelectedPost(blog.slug)}
            >
              <div className="w-[75%] flex flex-col justify-center items-start gap-1">
                <p className="text-md font-semibold font-lora text-black">
                  {blog.title}
                </p>
                <div className="flex flex-row justify-start items-center gap-1 flex-wrap">
                  <p className="text-sm font-hind text-gray-500">
                    {blog.category}
                  </p>
                  {blog.tags.map((tag: any, index: number) => (
                    <p
                      className="text-sm font-hind text-gray-500"
                      key={index}
                    >{`#${tag}`}</p>
                  ))}{" "}
                  <Dot color="gray" size={14} />
                  <p className="text-sm font-hind text-gray-500">{blog.date}</p>
                </div>
              </div>
              <div className="w-[25%] flex flex-col justify-center items-center">
                <Image
                  src={blog.image.url || ""}
                  alt="photo-profile"
                  width={100}
                  height={100}
                  className="rounded-md"
                  layout="responsive"
                />
              </div>
            </div>
          ))}
        {selectedPost && (
          <Post
            lang={props.lang}
            slug={selectedPost}
            eventBack={() => setSelectedPost("")}
          />
        )}
      </div>
    </SectionTemplate>
  );
}

export default BlogsSection;
