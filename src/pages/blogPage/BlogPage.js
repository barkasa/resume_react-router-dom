import React from "react";
import s from "./BlogPage.module.css";
import Posts from "../../components/posts/Posts";

export default function BlogPage({ postsBlog, getDateToDisplay }) {
  return (
    <div className={s.page}>
      <div className={s.title}>
        <h2>Blog</h2>
      </div>
      <div className={s.posts}>
        {postsBlog.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            tags={post.tagss}
            date={post.date}
            getDateToDisplay={getDateToDisplay}
          />
        ))}
      </div>
    </div>
  );
}
