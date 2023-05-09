import React from "react";
import s from "./Work.module.css";
import { Link } from "react-router-dom";

function Work({ id, title, tags, main_img, year, text }) {
  return (
    <div className={s.wrapper_card}>
      <div className={s.image}>{<img src={main_img} alt="foto" />}</div>
      <div className={s.container_work}>
        <Link to={`/works/${id}`}>
          <h2>{title}</h2>
        </Link>
        <div className={s.container_date_theme}>
          <div className={s.date}>{year}</div>

          <p className={s.tags}>{tags[0]}</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Work;
