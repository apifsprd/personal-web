import React from "react";

function ButtonNav(props: any) {
  return (
    <a
      href={`#${props.id}`}
      className={`w-[5rem] py-2 rounded-md flex justify-center items-center  hover:underline underline-offset-4 cursor-pointer hover:text-sky-300 ${
        props.selected === props.id ? "underline underline-offset-4" : ""
      }`}
      onClick={props.eventClick}
      key={props.id}
    >
      <p
        className={`text-lg font-montserrat ${
          props.selected === props.id ? "font-bold" : ""
        }`}
      >
        {props.title}
      </p>
    </a>
  );
}

export default ButtonNav;
