import React from "react";
import s from "./HomePage.module.css";

import avatar from "../../image/avatar.png";
import Work from "../../components/work/Work";

// import Post from "../../Post/Post";
import { Link } from "react-router-dom";
import Posts from "../../components/posts/Posts";

export default function HomePage({ newPosts, newWorks, getDateToDisplay }) {
  return (
    <div>
      <div className={s.preset_wrapper}>
        <div className={s.about_wrapper}>
          <div className={s.text_wrapper}>
            <h1 className={s.about}>
              Hi, I am John,
              <br /> Creative Technologist
            </h1>
            <p className={s.text_about}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className={s.download_button}>Download Resume</button>
          </div>
          <img className={s.avatar} src={avatar} alt="avatar" />
        </div>
      </div>

      <div className={s.wrapper_posts}>
        <div>
          <div className={s.post_navigation}>
            <p>Recent posts</p>
            <Link to="/blog">
              <a>View all</a>
            </Link>
          </div>
          <div className={s.container_posts}>
            {newPosts.map((el) => (
              <Posts getDateToDisplay={getDateToDisplay} key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>

      <div className={s.wrapper_works}>
        <div className={s.container_title}>Featured works</div>
        {newWorks.map((el) => (
          <Work key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
