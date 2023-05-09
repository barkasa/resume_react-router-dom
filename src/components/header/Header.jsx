import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Works", link: "/works" },
  { title: "Blog", link: "/blog" },
  { title: "Contacts", link: "/contacts" },
];

export default function Header() {
  const burgerMenuStyles = {
    bmMenuWrap: {
      width: "100%",
      background: "#ffffff",
      height: "auto",
    },
    bmBurgerButton: {
      position: "absolute",
      width: "30px",
      height: "20px",
      right: "18px",
      top: "20px",
    },
    bmBurgerBars: {
      background: "#21243D",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#21243D",
      width: "3px",
      height: "24px",
    },
    bmMenu: {
      background: "#ffffff",
      padding: "20px",
      fontSize: "20px",
    },
    bmItemList: {
      color: "#21243D",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
    bmOverlay: {
      background: "rgba(248, 248, 248, 0.8)",
    },
  };

  return (
    <div className={s.header_container}>
      <div className={s.header_wrapper}>
        {menuItems.map((item) => (
          <Link key={item.link} to={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={s.burger_menu}>
        <Menu right styles={burgerMenuStyles}>
          {menuItems.map((item) => (
            <Link key={item.link} to={item.link}>
              {item.title}
            </Link>
          ))}
        </Menu>
      </div>
    </div>
  );
}
