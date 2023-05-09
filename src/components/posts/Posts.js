import React from "react";
import s from "./Posts.module.css";

export default function Posts({
  id,
  title,
  tags,
  date,
  description,
  getDateToDisplay,
}) {
  return (
    <div className={s.wr}>
      <div className={s.posts_wrapper}>
        <div className={s.title}>
          <a href={`/blog/${id}`}>{title}</a>
        </div>
        <div className={s.posts_date}>{getDateToDisplay(date)}</div>
        <div className={s.tags}>{tags}</div>

        <div className={s.posts_description}>{description}</div>
      </div>
    </div>
  );
}
