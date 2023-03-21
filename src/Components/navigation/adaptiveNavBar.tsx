import React from "react";
import { pagesListInterface } from "../intefaces";
import { Link, useLocation } from "react-router-dom";

interface navProps {
  pagesList: pagesListInterface[];
  handleClick(): void;
}

const AdaptiveNavBar: React.FC<navProps> = ({ pagesList, handleClick }) => {
  let location: any = useLocation();

  return (
    <div className="nav-bar__mobile">
      <ul className="nav-list__mobile">
        {pagesList.map((item, index) => (
          <li key={index + item.link} className={"navbar-link__mobile"}>
            <Link
              to={item.link}
              onClick={handleClick}
              className={
                location.pathname === item.link ? "nav__link-active" : ""
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdaptiveNavBar;
