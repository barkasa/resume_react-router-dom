import React from "react";
import s from "./Footer.module.css";
import facebook from "../../image/fb.png";
import instagram from "../../image/insta.png";
import twitter from "../../image/Group.png";
import linkedin from "../../image/Linkedin.png";

export default function Footer() {
  return (
    <div className={s.footer_wrapper}>
      <div className={s.icons_wrapper}>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </div>
  );
}
