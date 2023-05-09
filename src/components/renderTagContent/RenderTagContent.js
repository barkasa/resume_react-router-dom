import React from "react";
import s from "./RenderTagContent.module.css";

export const RenderTagContent = ({ tagName, tagContent }) => {
  // console.log('PROPS-----------', {tagName, tagContent})
  if (tagName === "h1") {
    return <h1 className={s.title_h1}>{tagContent}</h1>;
  } else if (tagName === "h2") {
    return <h2 className={s.title_h2}>{tagContent}</h2>;
  } else if (tagName.includes("img")) {
    return <img className={s.img} src={tagContent} />;
  } else if (tagName.includes("text")) {
    return <p className={s.p}>{tagContent}</p>;
  }
};
