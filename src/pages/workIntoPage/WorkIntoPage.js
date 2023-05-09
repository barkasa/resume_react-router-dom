import React from "react";
import s from "./WorkIntoPage.module.css";
import { useParams } from "react-router-dom";
import { RenderTagContent } from "../../components/renderTagContent/RenderTagContent";
// import { RenderTagContent } from '../../RenderTagContent/RenderTagContent';

function WorkInfoPage({ works_data }) {
  let { id } = useParams();
  const selectedData = works_data.find((el) => el.id == id);
  const { full_title, title, text, year, tags, main_img, content } =
    selectedData;
  const stringTags = tags.join(", ");

  return (
    <div className={s.wrapper_info_page}>
      <div>
        <h2>{full_title}</h2>
      </div>
      <div className={s.container_date_theme}>
        <div className={s.date}>{year}</div>
        <p className={s.theme}>{stringTags}</p>
      </div>
      <p className={s.text}>{text}</p>
      <img className={s.img} src={main_img} alt={title} />
      <div>
        {content.map((el) => (
          <RenderTagContent tagName={el[0]} tagContent={el[1]} />
        ))}
      </div>
    </div>
  );
}

export default WorkInfoPage;
