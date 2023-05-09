import React from "react";
import s from "./WorksPage.module.css";
import Work from "../../components/work/Work";

function WorksPage({ works_data }) {
  return (
    <div className={s.wrapper_works}>
      <div className={s.container_title}>
        <h2>Work</h2>
      </div>
      <div className={s.container_works}>
        {works_data.map((el) => (
          <Work key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default WorksPage;
