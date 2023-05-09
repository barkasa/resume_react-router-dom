import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFoundPage_section}>
      <img
        width={1000}
        src="https://cdn.dribbble.com/users/387145/screenshots/3934767/404_800_600_2.png"
        alt="not_faund_page"
      />
    </div>
  );
};
export default NotFoundPage;
