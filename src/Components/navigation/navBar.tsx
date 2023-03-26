import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdaptiveNavBar from "./adaptiveNavBar";
import { pagesListInterface } from "../intefaces";
import { Cart } from "../styles/icons";

const pagesList: pagesListInterface[] = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/about" },
  { name: "CONTACT US", link: "/contact-us" },
  { name: "PRODUCTS", link: "/products" },
];

const NavBar: React.FC = () => {
  let location: any = useLocation();
  let counter: number = -100;
  let interval: any;
  const [activeBtn, setActiveBtn] = useState<boolean>(false);

  useEffect(() => {
    const navMobile: any = document.querySelector(".nav-bar__mobile");
    if (navMobile && counter !== 0) {
      interval = setInterval(() => {
        handleChangeTransformStyle(navMobile);
      }, 5);
    }
    return () => clearInterval(interval);
  }, [activeBtn]);

  const handleChangeTransformStyle = (element: any) => {
    counter = counter + 5;
    if (counter > -1) {
      clearInterval(interval);
    }
    element.style.transform = `translateX(${counter}vw)`;
  };

  const handleBtnClick = () => setActiveBtn((perv) => !perv);

  return (
    <div>
      <p className="greeting">Welcome to our store</p>
      <div className="separator"></div>
      <nav className="nav-bar">
        <div className="container nav__container">
          <div className="burger__menu" onClick={handleBtnClick}>
            {activeBtn ? (
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.48535 25.4852L25.4559 8.51467"
                  stroke="black"
                  strokeWidth="3"
                />
                <path
                  d="M25.4558 25.4852L8.48525 8.51467"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66663 4.16663H18.3333"
                  stroke="black"
                  strokeWidth="2.5"
                />
                <path
                  d="M1.66663 10.8333H18.3333"
                  stroke="black"
                  strokeWidth="2.5"
                />
                <path
                  d="M1.66663 17.5H18.3333"
                  stroke="black"
                  strokeWidth="2.5"
                />
              </svg>
            )}
          </div>
          <div className="logo">Fit&Balance</div>
          {pagesList.map((link: pagesListInterface, index: number) => (
            <Link
              to={link.link}
              className={
                location.pathname === link.link
                  ? "nav__link nav-bar-active"
                  : "nav__link"
              }
              key={index}
            >
              {link.name}
            </Link>
          ))}
          <div className="nav__cart_ico">
            <Cart />
          </div>
        </div>
      </nav>
      {activeBtn && (
        <AdaptiveNavBar pagesList={pagesList} handleClick={handleBtnClick} />
      )}
    </div>
  );
};

export default NavBar;
